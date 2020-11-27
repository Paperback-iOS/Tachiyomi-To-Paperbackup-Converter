import { PaperbackMangaObject } from "./PaperbackMangaObject"

export class PaperbackBackupObject {
    private date: number
    private library: {
        "1": object[],
        "2": object[],
        "3": object[],
        "4": object[],
        "5": object[],
        "6": object[]
    }

    private sourceRepositories: []
    private activeSources: []
    private chapterMarkers: []
    private version: string     

    constructor() {
        // Initialize the library arrays
        this.library = {"1": [], "2": [], "3": [], "4": [], "5": [], "6": []}

        // Hell, initialize everything
        this.date = new Date().getTime()
        this.sourceRepositories = []
        this.activeSources = []
        this.chapterMarkers = []
        this.version = "v0.3.0-b11.0.37"    // We'll just use this version of backup, since we know future versions are backwards compatible to such
    }

    appendReadingManga(manga: PaperbackMangaObject): void {
        this.library["1"].push(manga)
    }

    appendSourceRepository(): void {

    }

    appendActiveSource(): void {

    }

    appendChapterMarker(): void {

    }
}