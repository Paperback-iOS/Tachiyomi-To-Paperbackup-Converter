import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaLifeConversionSource extends AbstractConversionSource {

    // Only an `en` source exist for MangaLife
    tachiyomiSourceIds: string[] = ["7798162483793432927"]

    paperbackSourceId: string = "MangaLife"             // In this case, the source ID in Paperback is also MangaLife!

    tachiyomiSourceName: string = "MangaLife"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "MangaLife"

    paperbackSourceRepository = PaperbackRepository.PROMISES

    /*
        mangaID:
            Tachiyomi: "/manga/One-Piece"
            Paperback: "One-Piece"
        chapterId:
            Tachiyomi: "/read-online/One-Piece-chapter-1020.html"
            Paperback: "One-Piece-chapter-1020.html"
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId.replace('/manga/', '')
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string { 
        return tachiyomiId.replace('/read-online/', '')
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return '/manga/' + paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return '/read-online/' + paperbackId
    }


}