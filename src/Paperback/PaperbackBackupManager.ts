import { LightRepresentation } from "../LightRepresentation/LightRepresentation"
import { PaperbackBackup } from "./PaperbackBackup"

export class PaperbackBackupManager {
    
    private backup: PaperbackBackup.Backup

    constructor() {
        this.backup = this.returnEmptyBackup()
    }

    returnEmptyBackup(): PaperbackBackup.Backup {
        return {
            library:             [],
            sourceMangas:        [],
            chapterMarkers:      [],
            backupSchemaVersion: 3,
            date:                650282810.89528203,
            tabs:                [],
            version:             "v0.6.0-b1.0.5",
            sourceRepositories:  [],
            activeSources:       []
        }
    }

    /* Loading a backup */

    load(backup: PaperbackBackup.Backup) {
        this.backup = backup
    }

    /* Exporting a backup */

    exportBackup(): PaperbackBackup.Backup {
        return this.backup
    }

    exportLightRepresentation(): LightRepresentation.Backup {
        const library: LightRepresentation.Title[] = []

        const tabs: LightRepresentation.Tab[] = this.backup.tabs.map(this.parseLightRepresentationTab)
        const sources: LightRepresentation.Source[] = this.backup.activeSources.map(this.parseLightRepresentationSource)

        // Tabs parsing
        for (const libraryTab of this.backup.tabs) {
            tabs.push(this.parseLightRepresentationTab(libraryTab))
        }

        // Sources parsing
        for (const activeSource of this.backup.activeSources) {
            sources.push()
        }

        // Manga parsing
        for (const libraryManga of this.backup.library) {
            library.push({
                titles:         libraryManga.manga.titles,
                author:         libraryManga.manga.author,
                artist:         libraryManga.manga.artist,
                description:    libraryManga.manga.desc,
                cover:          libraryManga.manga.image,
                hentai:         libraryManga.manga.hentai,
                tabs:           libraryManga.libraryTabs.map(this.parseLightRepresentationTab),
                sources:        Source[]
            })
        }

        return {
            library:             Title[],
            tabs:                Tab[],
            sources:             Source[]
        }
    }

    /* Light Representation helpers */
    private parseLightRepresentationTab(libraryTab: PaperbackBackup.LibraryTab): LightRepresentation.Tab {
        return {
            id:     libraryTab.id,
            name:   libraryTab.name
        }
    }

    private parseLightRepresentationSource(activeSource: PaperbackBackup.ActiveSource): LightRepresentation.Source {
        return {
            id:     activeSource.id,
            name:   activeSource.name
        }
    }

    /* Helper functions */

    appendLibraryManga(libraryManga: PaperbackBackup.LibraryManga): void {
        this.backup.library.push(libraryManga)
    }

    appendSourceManga(sourceManga: PaperbackBackup.SourceManga): void {
        this.backup.sourceMangas.push(sourceManga)
    }

    appendChapterMarker(chapterMarker: PaperbackBackup.ChapterMarker): void {
        this.backup.chapterMarkers.push(chapterMarker)
    }

    appendChapterMarkers(chapterMarkers: PaperbackBackup.ChapterMarker[]): void {
        for (const chapterMarker of chapterMarkers) {
            this.appendChapterMarker(chapterMarker)
        }
    }

    appendLibraryTab(tab: PaperbackBackup.LibraryTab): void {
        this.backup.tabs.push(tab)
    }

    appendSourceRepository(repository: PaperbackBackup.SourceRepository): void {
        this.backup.sourceRepositories.push(repository)
    }

    appendActiveSource(source: PaperbackBackup.ActiveSource): void {
        // If this source is already registered, do not apply a duplicate
        if (this.backup.activeSources.some(x => source.id === x.id)) {
            return
        }

        this.backup.activeSources.push(source)
    }

}