import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { PaperbackBackup } from "../Paperback/PaperbackBackup";

import { AbstractConversionSource } from "../ConversionSources/AbstractConversionSource";
import { getConversionSourcesList } from "../ConversionSources/ConversionSources";

import { Dictionary } from "lodash";
import { TachiyomiBackupManager } from "../Tachiyomi/TachiyomiBackupManager";

/**
 * Manage conversion from {@link PaperbackBackup.Backup} to {@link TachiyomiObjectModel.Backup} 
 * 
 * @param paperbackBackup - The Tachiyomi backup object that should be converted
 */
export class PaperToTachiBackupConverter {

    // The backup that will be converted
    paperbackBackup: PaperbackBackup.Backup

    // Default date, used when a date conversion failed
    defaultTachiyomiDate = 1629031544315

    /**
     * @param paperbackBackup - The Paperback backup object that should be converted
     */
    constructor(paperbackBackup: PaperbackBackup.Backup) {
        this.paperbackBackup = paperbackBackup
    }

    /**
     * Handle the conversion of {@link paperbackBackup}
     * 
     * @returns a promise resolving into the converted Tachiyomi backup object
     */
    async conversion(): Promise<TachiyomiObjectModel.Backup> {

        // We use a TachiyomiBackupManager to generate the converted backup
        let tachiyomiBackupManager = new TachiyomiBackupManager()

        // We need conversionSources to be able to convert source, manga and chapters ids
        // conversionSourcesDict has the format:
        // {
        //     paperbackSourceId: conversionSource   
        // }
        let conversionSourcesDict = this.createConversionSourcesDict()

        // Contains paperbackSourceId of source that were found during the conversion
        // It is used to add sources and source repositories in the backup at the end of the conversion
        let usedSources: Set<string> = new Set()

        // We keep a list all the categories/tabs present in the backup.
        // The list of all categories is present in the Tachiyomi backup in tachiyomiBackup.backupCategories
        // The list of all categories is present in the Paperback backup in paperbackBackup.tabs
        // Tachiyomi categories are identified by an integer.
        // tabs[paperbackId] should be the converted Tachiyomi category index for tge corresponding Tachiyomi tab id paperbackId
        let categories: Dictionary<number> = {}

        // We keep a list of the manga that could not be converted
        // We could add a more explicit reason (ex: unsupported source)
        let unconvertedMangas: {paperbackMangaId: string, paperbackSourceId: string}[] = []

        /* NOTE: currently unused, see comment in `parseBackupManga` */
        // We will first create the list of all categories in the original backup
        // and add them to the converted one
        for (const tab of this.paperbackBackup.tabs) {
            // We will use tabs.length as sortOrder

            categories[tab.id] = tab.sortOrder

            tachiyomiBackupManager.appendCategory({
                name: tab.name,
                order: tab.sortOrder
            })
        }

        // Then we convert all manga from the Paperback backup
        // They are stored in paperbackBackup.library
        for (const libraryManga of this.paperbackBackup.library) {
            // Each Paperback manga contains data in three places
            // - libraryManga
            // - sourceManga
            // - chapterMarkers

            // With merged manga, there can be multiple sourceManga for a libraryManga.
            // This concept does not exist so we add a manga to the Tachiyomi backup
            // for each pair (libraryManga, sourceManga)

            // libraryManga and sourceManga can be associated with `libraryManga.manga.id === sourceManga.manga.id`

            for (const sourceManga of this.paperbackBackup.sourceMangas) {
                if (libraryManga.manga.id == sourceManga.manga.id) {
                    // We have a pair (libraryManga, sourceManga)

                    // We try to find a ConversionSource for the source the manga is from
                    const sourceConverter = conversionSourcesDict[sourceManga.sourceId]

                    if (sourceConverter === undefined) {
                        unconvertedMangas.push({
                            paperbackMangaId: sourceManga.mangaId,
                            paperbackSourceId: sourceManga.sourceId
                        })
                        console.log("Unsupported source " + sourceManga.sourceId)
        
                    } else {
                        // We convert the title
        
                        usedSources.add(sourceManga.sourceId)

                        // We add the manga to the converted backup
                        const backupManga = this.parseBackupManga(libraryManga, sourceManga, categories, sourceConverter)
                        tachiyomiBackupManager.appendBackupManga(backupManga)
                        
                    }
                }
            }
        }
        
        // Then we add the sources
        for (const paperbackSourceId of usedSources) {

            const converter = conversionSourcesDict[paperbackSourceId]

            const source: TachiyomiObjectModel.BackupSource = {
                name: converter.tachiyomiSourceName,
                // sourceId should be a `Number | Long.Long`. Or numbers are changed during the encoding (ex: 2499283573021220255 becomes 2499283573021220352)
                // The proto encoder don't mind if we give a string instead of a `Number | Long.Long`, which happen to solve the issue.
                //@ts-ignore
                sourceId: converter.getMainTachiyomiSourceId()
            }

            tachiyomiBackupManager.appendSource(source)

        }

        return tachiyomiBackupManager.exportBackup()
    }

    /**
     * Generate a dictionary using paperbackSourceIds as keys
     * @returns A dictionary containing available conversionSources
     */
    private createConversionSourcesDict(): Dictionary<AbstractConversionSource> {
        let converters = getConversionSourcesList()

        let migrationSources: Dictionary<AbstractConversionSource> = {}

        for (const converter of converters) {
            migrationSources[converter.paperbackSourceId] = converter
        }

        return migrationSources
    }

    /**
     * Convert the date elements used in Tachiyomi to 
     * @param tachiyomiDate a string representing a timestamp (in milliseconds since 1970?) (ex: 1606427053160)
     * @return The converted for Paperback timestamp (in seconds since 2001?) (ex: 650645332.25231397)
     */
    private convertPaperbackDate(paperbackDate: number | undefined): number {
        /*
         * Tachiyomi backup seems to be using a timestamp in milliseconds since 1970 while Paperback accept a timestamp in seconds since 2001
         */
        let date = paperbackDate

        if (date === undefined || isNaN(date)) {
            // Default value
            return this.defaultTachiyomiDate
        }

        // We add 31 years
        date = date + 31556926 * 31

        // We convert the date in milliseconds
        return date * 1000
    }

    private parseStatus(paperBackStatus: PaperbackBackup.MangaStatus): number {
        // Tachiyomi status are defined here:
        // https://github.com/tachiyomiorg/tachiyomi/blob/master/app/src/main/java/eu/kanade/tachiyomi/source/model/SManga.kt
        // Paperback status here:
        // https://github.com/Paperback-iOS/extensions-common/blob/master/src/models/Manga/index.ts

        // The status can be a long so we need to convert it to a number
        switch(paperBackStatus) {
            case PaperbackBackup.MangaStatus.UNKNOWN: {
                return 0
            }
            case PaperbackBackup.MangaStatus.ONGOING: {
                return 1
            }
            case PaperbackBackup.MangaStatus.COMPLETED: {
                return 2
            }
            case PaperbackBackup.MangaStatus.ABANDONED: {
                // ABANDONED is not supported by Paperback
                return 0
            }
            case PaperbackBackup.MangaStatus.HIATUS: {
                // HIATUS is not supported by Paperback
                return 0
            }
            default: {
                return 0
            }
        }
    }

    /**
     * @param libraryManga the {@link PaperbackBackup.LibraryManga} object
     * @param sourceManga an associated {@link PaperbackBackup.SourceManga}
     * @param categories the list of all categories present in the backup, identifiables by index
     * @param converter the converter associated with the source this manga come from
     * @returns The generated {@link TachiyomiObjectModel.IBackupManga} object
     */
    private parseBackupManga(libraryManga: PaperbackBackup.LibraryManga, sourceManga: PaperbackBackup.SourceManga, categories: Dictionary<number>, converter: AbstractConversionSource): TachiyomiObjectModel.IBackupManga {
        
        // NOTE:
        // We won't parse categories. 
        // Using a number[] for `categories` raise an error "Expected wire type 0, found 2" when the backup is restored in the app
        //
        // The encoder seems to be using a `wireType 2`.
        // See src/Tachiyomi/proto/TachiyomiObjectModel.js, lines 299-304:
        // ```js
        // if (message.categories != null && message.categories.length) {
        //     writer.uint32(/* id 17, wireType 2 =*/138).fork();
        //     for (var i = 0; i < message.categories.length; ++i)
        //         writer.int32(message.categories[i]);
        //     writer.ldelim();
        // }
        // ```
        
        
        // Parse genres
        let genres: string[] = []
        for (const tagSection of libraryManga.manga.tags) {
            for (const tag of tagSection.tags) {
                genres.push(tag.value)
            }
        }

        // Parse chapters and history
        // We need to save these chapters in two places: `chapters` and `history`
        // NOTE: we won't be able to add unread chapters in `chapters` as they are not stored in the backup
        let chapters: TachiyomiObjectModel.IBackupChapter[] = []
        let history: TachiyomiObjectModel.IBackupHistory[] = []
        // In the Paperback backup, chapter markers are saved in `backup.chapterMarkers`
        for (const chapterMarker of this.paperbackBackup.chapterMarkers) {
            // We search chapters for this manga in this source. We can identify them by `mangaId`
            if (chapterMarker.chapter?.mangaId === sourceManga.mangaId) {

                const chapter: TachiyomiObjectModel.IBackupChapter = {
                    url:            converter.parsePaperbackChapterId(chapterMarker.chapter.id, sourceManga),
                    name:           chapterMarker.chapter.name,
                    scanlator:      chapterMarker.chapter.group,
                    read:           chapterMarker.completed,        // Is that a completed or a started boolean?
                    bookmark:       false,                          // The bookmark feature is not available in Paperback
                    lastPageRead:   chapterMarker.lastPage,
                    dateFetch:      this.convertPaperbackDate(chapterMarker.time),              // Is that the correct field?
                    dateUplaod:     this.convertPaperbackDate(chapterMarker.chapter?.time),     // Is that the correct field?
                    chapterNumber:  chapterMarker.chapter.chapNum,
                    sourceOrder:    chapterMarker.chapter.sortingIndex
                }

                const historyElement: TachiyomiObjectModel.IBackupHistory = {
                    url:        converter.parsePaperbackChapterId(chapterMarker.chapter.id, sourceManga),
                    lastRead:   this.convertPaperbackDate(chapterMarker.time)
                }

                chapters.push(chapter)
                history.push(historyElement)
            }
        }

        return {
            // Source should be a `Number | Long.Long`. Or numbers are changed during the encoding (ex: 2499283573021220255 becomes 2499283573021220352)
            // The proto encoder don't mind if we give a string instead of a `Number | Long.Long`, which happen to solve the issue.
            //@ts-ignore
            source: converter.getMainTachiyomiSourceId(),
            url: converter.parsePaperbackMangaId(sourceManga.mangaId, sourceManga),
            title: (libraryManga.manga.titles.length > 0) ? libraryManga.manga.titles[0] : "untitled",
            artist: libraryManga.manga.artist,
            author: libraryManga.manga.author,
            description: libraryManga.manga.desc,
            genre: genres,
            status: this.parseStatus(libraryManga.manga.status),
            thumbnailUrl: libraryManga.manga.image,
            dateAdded: this.convertPaperbackDate(libraryManga.dateBookmarked),
            chapters: chapters,
            categories: [],
            history: history
        }
    }
}