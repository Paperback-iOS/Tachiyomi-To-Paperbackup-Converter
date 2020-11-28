import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaLifeConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "7798162483793432927"     // Tachiyomi calls MangaLife this value
    tachiyomiSourceName: string = "MangaLife"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "MangaLife"           // In this case, the source ID in Paperback is also MangaLife!

    parseMangaId(tachiyomiId: string) {
        // Tachiyomi for this source returns things of format '/manga/Solo-Leveling' where paperback just needs the 'Solo-Leveling' bits
        return tachiyomiId.replace('/manga/', '')
    }

    parseChapterId(tachiyomiId: string): string {
        // /read-online/Solo-Leveling-chapter-0126.html might be something we'd see
        return tachiyomiId.replace('/read-online/', '')
    }

}