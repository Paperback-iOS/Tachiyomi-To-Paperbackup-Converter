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