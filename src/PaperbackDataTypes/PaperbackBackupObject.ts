import { RepositoryObject, SourceObject } from "../Types/RepositoryObject"
import { PaperbackChapterMarkerObject } from "./PaperbackChapterMarkerObject"
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

    private sourceRepositories: RepositoryObject[]
    private activeSources: SourceObject[]
    private chapterMarkers: PaperbackChapterMarkerObject[]
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

        // Always add the default source repository
        this.sourceRepositories.push(new RepositoryObject("Official Repo", "https://paperback-ios.github.io/extensions-beta"))
    }

    appendReadingManga(manga: PaperbackMangaObject): void {
        this.library["1"].push(manga)
    }

    appendSourceRepository(source: SourceObject): void {


    }

    appendActiveSource(source: SourceObject): void {
        // If this source is already registered, do not apply a duplicate
        if(this.activeSources.includes(source)) {
            return
        }

        this.activeSources.push(source)
    }

    appendChapterMarker(chapter: PaperbackChapterMarkerObject): void {
        this.chapterMarkers.push(chapter)
    }

}