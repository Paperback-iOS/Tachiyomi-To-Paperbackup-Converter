import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaseeConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "9"     // Tachiyomi calls MangaReader this value - Yeah, 9 is kinda wild
    tachiyomiSourceName: string = "Mangasee"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "Mangasee"           // In this case, the source ID in Paperback is also Mangadex!

    parseMangaId(tachiyomiId: string) {
        return tachiyomiId.replace('/manga/', '')
    }

    parseChapterId(tachiyomiId: string): string {
        // /bleach/686 is an example of something we might see. 
        return tachiyomiId.replace('/read-online/', '')
    }

}