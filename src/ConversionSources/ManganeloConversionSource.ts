import { AbstractConversionSource } from "./AbstractConversionSource"

export class ManganeloConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "1024627298672457456"     // Tachiyomi calls Manganelo this value
    tachiyomiSourceName: string = "Manganelo"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "Manganelo"           // In this case, the source ID in Paperback is also Manganelo!

    parseMangaId(tachiyomiId: string) {
        // Tachiyomi for this source returns things of format '/manga/dj919202' where paperback just needs the 'dj919202' bits
        return tachiyomiId.replace('/manga/', '')
    }

    parseChapterId(tachiyomiId: string): {mangaId: string, chapterId: string} {
        // '/chapter/dj919202/chapter_4' is an example of what we might see
        let cutId = tachiyomiId.replace('/chapter/', '')
        let splitVal = cutId.split('/')
        return {mangaId: splitVal[0], chapterId: splitVal[1]}
    }

}