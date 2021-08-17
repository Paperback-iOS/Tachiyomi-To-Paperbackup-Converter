import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaseeConversionSource extends AbstractConversionSource {

    // Only an `en` source exist for Mangasee
    tachiyomiSourceIds: string[] = ["9"]        // Tachiyomi calls MangaReader this value - Yeah, 9 is kinda wild

    paperbackSourceId: string = "Mangasee"      // In this case, the source ID in Paperback is also Mangasee!

    tachiyomiSourceName: string = "Mangasee"    // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "Mangasee"

    paperbackSourceRepository = PaperbackRepository.PROMISES

    /*
        mangaID:
            Tachiyomi: "/manga/Martial-Peak"
            Paperback: "Martial-Peak"
        chapterId:
            Tachiyomi: "/read-online/Martial-Peak-chapter-1406-index-2.html"
            Paperback: "Martial-Peak-chapter-1406-index-2.html"
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