import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class ManganeloConversionSource extends AbstractConversionSource {
    // Manganelo and Manganato represent the same source

    // Only an `en` source exist for Manganelo
    tachiyomiSourceIds: string[] = ["1024627298672457456"]

    paperbackSourceId: string = "Manganelo"             // In this case, the source ID in Paperback is also Manganelo!

    tachiyomiSourceName: string = "Manganato"

    paperbackSourceRepository = PaperbackRepository.PROMISES

    /*
        mangaID:
            Tachiyomi: "/manga/dj919202"
            Paperback: "dj919202"
        chapterId:
            Tachiyomi: "/chapter/dj919202/chapter_9"
            Paperback: "chapter_9"
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        // Tachiyomi for this source returns things of format '/manga/dj919202' where paperback just needs the 'dj919202' bits
        return tachiyomiId.replace('/manga/', '')
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string { 
        // '/chapter/dj919202/chapter_4' is an example of what we might see
        return tachiyomiId.replace(/(.+)\//, '')
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return '/manga/' + paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return '/chapter/' + mangaInfo.mangaId + paperbackId
    }

}