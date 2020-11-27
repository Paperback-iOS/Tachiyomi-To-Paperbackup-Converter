import { stringify } from "querystring"

export class PaperbackMangaObject {

    object: SubPaperbackObject
    sourceId: string

    constructor(sourceId: string) {

        this.sourceId = sourceId

        // Initialize all of the fields to their defaults
        this.object = new SubPaperbackObject()
        this.object.rating = 0
        this.object.id = ""
        this.object.description = ""
        this.object.follows = 0
        this.object.views = 0
        this.object.author = ""
        this.object.users = 0
        this.object.langFlag = "_unknown"
        this.object.lastUpdate = ""
        this.object.covers = []
        this.object.tags
        this.object.titles = []
        this.object.image = ""
        this.object.relatedManga = []
        this.object.hentai = false
        this.object.langName = "Unknown"
        this.object.artist = ""
        this.object.status = ""
        this.object.avgRating = 0
    }

}

class SubPaperbackObject {
    rating: number
    id: string
    description: string
    follows: number;
    views: number;
    author: string;
    users: number;
    langFlag: String
    lastUpdate: string
    covers: string[]
    tags: {id: string, label: string, tags: string[]}
    titles: string[]
    image: string
    relatedManga: string[]
    hentai: boolean
    langName: string
    artist: string
    status: string
    avgRating: number
}