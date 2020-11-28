import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangadexConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "2499283573021220255"     // Tachiyomi calls Mangadex this value
    tachiyomiSourceName: string = "MangaDex"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "MangaDex"           // In this case, the source ID in Paperback is also Mangadex!

    parseMangaId(tachiyomiId: string) {
        var cutVal = tachiyomiId.replace('/manga/', '')
        cutVal = cutVal.substring(0, cutVal.length - 1)
        return cutVal
    }

    parseChapterId(tachiyomiId: string): string {
        // /api/chapter/1105111 is an example of something we might see. 
        return tachiyomiId.replace('/api/chapter/', '') 
    }

}