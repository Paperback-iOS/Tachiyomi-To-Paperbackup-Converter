import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaReaderConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "789561949979941461"     // Tachiyomi calls MangaReader this value
    tachiyomiSourceName: string = "MangaReader"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "MangaReader"           // In this case, the source ID in Paperback is also Mangadex!

    parseMangaId(tachiyomiId: string) {
        return tachiyomiId.substring(1, tachiyomiId.length)
    }

    parseChapterId(tachiyomiId: string): string {
        // /bleach/686 is an example of something we might see. 
        return tachiyomiId.match(/\/.+\/(\d+)/)[1]
    }

}