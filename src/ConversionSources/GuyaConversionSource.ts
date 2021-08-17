import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class GuyaConversionSource extends AbstractConversionSource {

    // Only an `en` source exist for Guya
    tachiyomiSourceIds: string[] = ["4637971935551651734"]

    paperbackSourceId: string = "Guya"             // In this case, the source ID in Paperback is also Guya!

    tachiyomiSourceName: string = "Guya"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "Guya"

    paperbackSourceRepository = PaperbackRepository.PROMISES

    /*
        mangaID:
            Tachiyomi: "Kaguya-Wants-To-Be-Confessed-To"
            Paperback: "Kaguya-Wants-To-Be-Confessed-To"
        chapterId:
            Tachiyomi: "Kaguya-Wants-To-Be-Confessed-To/172.1/3"
            Paperback: "172.1|3"
        Guya API: 
            manga id: Kaguya-Wants-To-Be-Confessed-To
            chapter id: 172.1
            group id: 3
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string { 
        const [mangaId, chapterId, group] = tachiyomiId.split("/")
        return chapterId + "|" + group
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        const [chapterId, group] = paperbackId.split("|")
        const mangaId = mangaInfo.mangaId
        return mangaId + "/" + chapterId + "/" + group
    }

}
