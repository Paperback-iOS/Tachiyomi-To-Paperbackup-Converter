import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { PaperbackBackup } from "../Paperback/PaperbackBackup";
import { PaperbackBackupManager } from "../BackupManagers/PaperbackBackupManager"
import { PaperbackRepository } from "../Paperback/PaperbackRepository";

import { AbstractConversionSource } from "../ConversionSources/AbstractConversionSource";
import { getConversionSourcesList } from "../ConversionSources/ConversionSources";

import { Dictionary } from "lodash";
import { v4 as uuidv4 } from 'uuid';

/**
 * Manage conversion from {@link TachiyomiObjectModel.Backup} to {@link PaperbackBackup.Backup}
 * 
 * @param tachiyomiBackup - The Tachiyomi backup object that should be converted
 */
export class TachiToPaperBackupConverter {

    // The backup that will be converted
    tachiyomiBackup: TachiyomiObjectModel.Backup


    paperbackTabs: PaperbackBackup.LibraryTab[] = []

    // Default date, used when a date conversion failed
    defaultPaperbackDate = 650645332.25231397

    /**
     * @param tachiyomiBackup - The Tachiyomi backup object that should be converted
     */
    constructor(tachiyomiBackup: TachiyomiObjectModel.Backup) {
        this.tachiyomiBackup = tachiyomiBackup
    }

    /**
     * Handle the conversion of {@link tachiyomiBackup}
     * 
     * @returns a promise resolving into the converted Paperback backup object
     */
    async conversion(): Promise<conversionResult<PaperbackBackup.Backup>> {

        // We use a PaperbackBackupManager to generate the converted backup
        let paperbackBackupManager = new PaperbackBackupManager()

        // We need conversionSources to be able to convert source, manga and chapters ids
        // conversionSourcesDict has the format:
        // {
        //     tachiyomiSourceId: conversionSource   
        // }
        let conversionSourcesDict: Dictionary<AbstractConversionSource> = this.createConversionSourcesDict()

        // Contains tachiyomiSourceId of source that were found during the conversion
        // It will be use to add sources and source repositories in the backup at the end of the conversion
        let usedSources: Set<string> = new Set()

        // Contains versioning files of used source repositories
        // To generate PaperbackBackup.ActiveSource objects, we need to fetch info about the source from
        // its repository versioning file. To prevent the converter from doing the same request multiple times
        // we save already fetched versioning files in this dictionary
        // repositoriesDict has the format:
        // {
        //     paperbackRepositoryBaseURL: versioningFile   
        // }
        let repositoriesDict: Dictionary<PaperbackRepository.versioningFile> = {}

        // We keep a list all the categories/tabs present in the backup.
        // The list of all categories is present in the Tachiyomi backup in tachiyomiBackup.backupCategories
        // The list of all categories is present in the Paperback backup in paperbackBackup.tabs
        // Tachiyomi categories are identified by an integer.
        // tabs[0] should be the converted Paperback tab for the corresponding Tachiyomi category `0`
        // We use a global variable as we will access tabs from other methods
        this.paperbackTabs = []

        // We keep a list of the manga that could not be converted
        // We could add a more explicit reason (ex: unsupported source)
        //let unconvertedMangas: TachiyomiObjectModel.IBackupManga[] = []
        let unconvertedMangas: {mangaTitle: string, mangaId: string, sourceId: string}[] = []

        // We will first create the list of all categories in the original backup
        // and add them to the converted one
        for (const category of this.tachiyomiBackup.backupCategories) {
            // We will use tabs.length as sortOrder
            const paperbackTab = this.parseCategory(category, this.paperbackTabs.length)

            this.paperbackTabs.push(paperbackTab)
            paperbackBackupManager.appendLibraryTab(paperbackTab)
        }

        // Then we convert all manga from the Tachiyomi backup
        // They are stored in tachiyomiBackup.backupManga
        for (const manga of this.tachiyomiBackup.backupManga) {
            // Each manga contains data we need to add to the Paperback backup in:
            // - libraryManga
            // - sourceManga
            // - chapterMarkers

            // We try to find a ConversionSource for the source the manga is from
            const sourceConverter = (manga.source === undefined || manga.source === null) ? undefined : conversionSourcesDict[manga.source.toString()] // If source is undefined, we return undefined as we will never find a converter

            // If it does not exist, we wont be able to convert the manga
            if (sourceConverter === undefined) {
                unconvertedMangas.push({
                    mangaTitle: manga.title ?? 'undefined',
                    mangaId: manga.url ?? 'undefined',
                    sourceId: manga.source?.toString() ?? 'undefined'
                })
                console.log("Unsupported source " + manga.source?.toString())

            } else {
                // We convert the title

                usedSources.add(manga.source!.toString())   // We known here that the source is not undefined

                // We need to parse mangaInfo only *one* time 
                // in order to use the same UUID for libraryManga and sourceManga
                const mangaInfo = this.parseMangaInfo(manga)
            
                const libraryManga = this.parseLibraryManga(manga, mangaInfo)
                paperbackBackupManager.appendLibraryManga(libraryManga)

                const sourceManga = this.parseSourceManga(manga, mangaInfo, sourceConverter)
                paperbackBackupManager.appendSourceManga(sourceManga)

                const chapterMarkers = this.parseChapterMarkers(manga, sourceConverter)
                paperbackBackupManager.appendChapterMarkers(chapterMarkers)
            }
        }

        // Then we add activeSources we found and their corresponding repositories
        
        for (const tachiyomiSourceId of usedSources) {

            const converter = conversionSourcesDict[tachiyomiSourceId]

            const paperbackSourceId = converter.paperbackSourceId
            const paperbackSourceRepository = converter.paperbackSourceRepository

            let versioning = repositoriesDict[paperbackSourceRepository.url]

            // We first check if the versioning file of the repository is already already fetched
            if (versioning === undefined) {
                // If it is not, we make a request to get it
                versioning = await PaperbackRepository.getRepositoryVersioning(paperbackSourceRepository.url)

                repositoriesDict[paperbackSourceRepository.url] = versioning

                paperbackBackupManager.appendSourceRepository(converter.paperbackSourceRepository)
            }

            // We need to find the right source in the versioning file, construct the ActiveSource object and append it to the backup
            for (const sourceData of versioning.sources) {
                if (sourceData.id === paperbackSourceId) {
                    const activeSource = this.parseActiveSource(sourceData, paperbackSourceRepository)
                    paperbackBackupManager.appendActiveSource(activeSource)
                }
            }
        }
        
        return {
			backupObject: paperbackBackupManager.exportBackup(),
			unconverted: unconvertedMangas,
            type: 'Paperback'
		}
    }

    /**
     * Generate a dictionary using tachiyomiSourceIds as keys
     * @returns A dictionary containing available conversionSources
     */
    private createConversionSourcesDict(): Dictionary<AbstractConversionSource> {
        let converters = getConversionSourcesList()
        console.log(converters)

        let migrationSources: Dictionary<AbstractConversionSource> = {}

        for (const converter of converters) {
            // The conversionSource define a list of Tachiyomi ids, on per language.
            // We will create an entry in migrationSources for each id
            for (const tachiyomiSourceId of converter.tachiyomiSourceIds) {
                migrationSources[tachiyomiSourceId] = converter
            }
        }

        return migrationSources
    }

    /**
     * Convert the date elements used in Tachiyomi to 
     * @param tachiyomiDate a string representing a timestamp (in milliseconds since 1970?) (ex: 1606427053160)
     * @return The converted for Paperback timestamp (in seconds since 2001?) (ex: 650645332.25231397)
     */
    private convertTachiyomiDate(tachiyomiDate: number | Long): number {
        /*
         * Tachiyomi backup seems to be using a timestamp in milliseconds since 1970 while Paperback accept a timestamp in seconds since 2001
         */
        let date = Number(tachiyomiDate)

        if (isNaN(date)) {
            // Default value
            return this.defaultPaperbackDate
        }

        // We convert the date in seconds
        date = date / 1000

        // We subtract 31 years
        return date - 31556926 * 31
    }

    parseCategory(category: TachiyomiObjectModel.IBackupCategory, sortOrder: number): PaperbackBackup.LibraryTab {
        // TODO: Should we use category.order?
        return  {
            id: uuidv4().toUpperCase(),
            name: category.name ?? "unnamed",
            sortOrder: sortOrder
        }
    }

    /**
     * **Warning**: the method generate a new UUID to represent the manga. 
     * It should thus only be called **once** per title
     * @param manga a {@link TachiyomiObjectModel.IBackupManga} object
     * @returns the generated {@link PaperbackBackup.MangaInfo} object
     */
    private parseMangaInfo(manga: TachiyomiObjectModel.IBackupManga): PaperbackBackup.MangaInfo {

        // These elements does not exist in Tachiyomi backups
        const mangaInfoAdditionalInfo: PaperbackBackup.MangaInfoAdditionalInfo = {
            langFlag:  "_unknown",
            users:     "0",
            langName:  "Unknown",
            avgRating: "0.0",
            views:     "0",
            follows:   "0",
        }

        // Grab all of the tags
        let tags: {id: string, value: string}[] = []
        for (let genre of (manga.genre ?? [])) {
            tags.push({id: genre, value: genre})
        }

        let mangaInfoTag: PaperbackBackup.MangaInfoTag[] = [{
            id:    "0",
            label: "genres",
            tags:  tags
        }]

        return {
            id:             uuidv4().toUpperCase(),
            rating:         0,                          // Ratings do not exist in Tachiyomi backups
            covers:         [],
            author:         manga.author ?? "",
            tags:           mangaInfoTag,
            desc:           manga.description ?? "",
            titles:         [manga.title ?? ""],
            image:          manga.thumbnailUrl ?? "",
            additionalInfo: mangaInfoAdditionalInfo,
            hentai:         false,                      // Not supported, which is kinda awkward, so flag everything as false so nothing is hidden by default
            artist:         manga.artist ?? "",
            status:         this.parseStatus(manga.status)
        }
    }

    private parseStatus(tachiyomiStatus: number | Long.Long | null | undefined): PaperbackBackup.MangaStatus {
        // Tachiyomi status are defined here:
        // https://github.com/tachiyomiorg/tachiyomi/blob/master/app/src/main/java/eu/kanade/tachiyomi/source/model/SManga.kt
        // Paperback status here:
        // https://github.com/Paperback-iOS/extensions-common/blob/master/src/models/Manga/index.ts

        // The status can be a long so we need to convert it to a number
        // If the status is undefined, `Number(tachiyomiStatus)` will be NaN, the switch will use the default value
        switch(Number(tachiyomiStatus)) {
            case 0: {
                return PaperbackBackup.MangaStatus.UNKNOWN
            }
            case 1: {
                return PaperbackBackup.MangaStatus.ONGOING
            }
            case 2: {
                return PaperbackBackup.MangaStatus.COMPLETED
            }
            case 3: {
                // LICENSED is not supported by Paperback
                return PaperbackBackup.MangaStatus.UNKNOWN
            }
            default: {
                return PaperbackBackup.MangaStatus.UNKNOWN
            }
        }
    }

    /**
     * @param manga the Tachiyomi {@link TachiyomiObjectModel.IBackupManga} object
     * @param mangaInfo the Paperback object, which should be generated using {@link parseMangaInfo}
     * @param tabs the list of all tabs present in the backup, identifiables by index
     * @returns The generated {@link PaperbackBackup.LibraryManga} object
     */
    private parseLibraryManga(manga: TachiyomiObjectModel.IBackupManga, mangaInfo: PaperbackBackup.MangaInfo): PaperbackBackup.LibraryManga {
        // The date conversion may fail if there is no history elements
        try {
            var lastRead = this.convertTachiyomiDate(manga.history![0].lastRead!)
        } catch {
            var lastRead = this.defaultPaperbackDate
        }

        // The date conversion may fail if there is no history elements
        try {
            // We use the fetch date of the latest chapter (position 0) assuming it should be the more recent
            var lastUpdated = this.convertTachiyomiDate(manga.chapters![0].dateFetch!)
        } catch {
            var lastUpdated = this.defaultPaperbackDate
        }

        // We need to parse categories/tabs for this manga
        let libraryTabs: PaperbackBackup.LibraryTab[] = []
        for (const tachiyomiCategoryIndex of (manga.categories ?? [])) {
            if (tachiyomiCategoryIndex < this.paperbackTabs.length) {
                libraryTabs.push(this.paperbackTabs[tachiyomiCategoryIndex])
            } else {
                console.log(`The index ${tachiyomiCategoryIndex} does not exist in tabs`)
            }
        }

        return {
            lastRead:       lastRead,                       // There may be no last read chapters
            manga:          mangaInfo,
            lastUpdated:    lastUpdated,
            dateBookmarked: this.defaultPaperbackDate,      // Does not exist in Tachiyomi backup
            libraryTabs:    libraryTabs,
            updates:        0                               // Does not exist
        }
    }

    /**
     * @param manga the Tachiyomi {@linkcode TachiyomiObjectModel.IBackupManga} object
     * @param mangaInfo the Paperback object, which should be generated using {@linkcode parseMangaInfo}
     * @param sourceConverter a conversionSource that should handle the source the manga come from
     * @returns The generated {@linkcode PaperbackBackup.SourceManga} object
     */
    private parseSourceManga(manga: TachiyomiObjectModel.IBackupManga, mangaInfo: PaperbackBackup.MangaInfo, sourceConverter: AbstractConversionSource): PaperbackBackup.SourceManga {
        return {
            mangaId:      sourceConverter.parseTachiyomiMangaId(manga.url ?? "", manga),     // manga.url should not be undefined
            id:           uuidv4().toUpperCase(),                                            // We need a new UUID
            manga:        mangaInfo,
            originalInfo: mangaInfo,
            sourceId:     sourceConverter.paperbackSourceId
        }
    }

    /**
     * @param manga the Tachiyomi {@linkcode TachiyomiObjectModel.IBackupManga} object
     * @param sourceConverter a conversionSource that should handle the source the manga come from
     * @returns The generated {@linkcode PaperbackBackup.ChapterMarker} list
     */
    private parseChapterMarkers(manga: TachiyomiObjectModel.IBackupManga, sourceConverter: AbstractConversionSource): PaperbackBackup.ChapterMarker[] {

        const chapterMarkers: PaperbackBackup.ChapterMarker[] = []

        for (const chapterHistory of (manga.history ?? [])) {
            const chapterMarker = this.parseChapterMarker(chapterHistory, manga, sourceConverter)
            if (chapterMarker !== undefined) {
                chapterMarkers.push(chapterMarker)
            }
        }

        return chapterMarkers
    }

    private parseChapterMarker(chapterHistory: TachiyomiObjectModel.IBackupHistory, manga: TachiyomiObjectModel.IBackupManga, sourceConverter: AbstractConversionSource): PaperbackBackup.ChapterMarker | undefined {

        // Get the corresponding chapter details for this history element `chapterHistory`

        let chapter: TachiyomiObjectModel.IBackupChapter | undefined
        for (let obj of (manga.chapters ?? [])) {
            if(chapterHistory.url == obj.url) {
                chapter = obj
                break
            }
        }

        // You should never hit this error, but if Tachiyomi somehow has a history element without a corresponding chapter, don't fill data
        if (chapter === undefined) {
            return undefined
        }

        let dateUpload: number
        try {
            dateUpload = this.convertTachiyomiDate(chapter.dateUplaod!)
        } catch (error) {
            dateUpload = this.defaultPaperbackDate
        }

        let dateFetch: number
        try {
            dateFetch = this.convertTachiyomiDate(chapter.dateFetch!)
        } catch (error) {
            dateFetch = this.defaultPaperbackDate
        }

        const chapterInfo: PaperbackBackup.ChapterInfo = {
            chapNum:      chapter.chapterNumber ?? -2,
            mangaId:      sourceConverter.parseTachiyomiMangaId(manga.url ?? "", manga),     // The id should never be undefined
            volume:       -2,                                                                // Required field
            id:           sourceConverter.parseTachiyomiChapterId(chapter.url ?? "", manga), // The id should never be undefined
            time:         dateUpload,
            sortingIndex: chapter.sourceOrder ?? -2,
            sourceId:     sourceConverter.paperbackSourceId,
            group:        chapter.scanlator ?? "",
            langCode:     "_unknown",
            name:         chapter.name ?? ""
        }

        const chapterMarker: PaperbackBackup.ChapterMarker = {
            totalPages: chapter.lastPageRead ?? 0,  // This may be wrong?
            lastPage:   chapter.lastPageRead ?? 0,
            chapter:    chapterInfo,
            completed:  chapter.read ?? false,
            time:       dateFetch,                  // Should this be the read time or the fetch time?
            hidden:     false
        }

        return chapterMarker
    }

    private parseActiveSource(sourceData: PaperbackRepository.sourceData, repository: PaperbackBackup.SourceRepository): PaperbackBackup.ActiveSource {
        /*
            We may want to use:
                contentRating:  sourceData.contentRating ?? "EVERYONE",
            We will assume that all sources included in the Tachiyomi backup should be added to the Paperback backup
            and should be restored by the app even is content settings are not set in the app, we will thus use:
                contentRating:  "EVERYONE",
            for every sources
        */
        return {
            author:         sourceData.author,
            desc:           sourceData.desc,
            website:        sourceData.desc,
            id:             sourceData.id,
            tags:           sourceData.tags,
            contentRating:  "EVERYONE",
            websiteBaseURL: sourceData.websiteBaseURL,
            repo:           repository.url,
            version:        sourceData.version,
            icon:           sourceData.icon,
            name:           sourceData.name
        }
    }
}