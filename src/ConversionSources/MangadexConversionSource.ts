import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class MangaDexConversionSource extends AbstractConversionSource {
    
    // There is no `all` source but only a `en` source: "2499283573021220255", used as default
    tachiyomiSourceIds: string[] = ["2499283573021220255", "1411768577036936240", "8033579885162383068", "4710920497926776490", "6750440049024086587", "1952071260038453057", "2098905203823335614", "5098537545549490547", "4284949320785450865", "4505830566611664829", "8254121249433835847", "9194073792736219759", "3260701926561129943", "5463447640980279236", "6400665728063187402", "2655149515337070132", "5189216366882819742", "1145824452519314725", "3339599426223341161", "425785191804166217", "5148895169070562838", "4150470519566206911", "4774459486579224459", "3578612018159256808", "5967745367608513818", "3846770256925560569", "3807502156582598786", "3285208643537017688", "4938773340256184018", "3781216447842245147", "1471784905273036181", "1713554459881080228", "5860541308324630662", "8578871918181236609", "1493666528525752601", "5779037855201976894", "1347402746269051958", "737986167355114438", "1424273154577029558", "6840513937945146538", "4872213291993424667"]
    paperbackSourceId: string = "MangaDex"             // In this case, the source ID in Paperback is also MangaDex!

    tachiyomiSourceName: string = "MangaDex"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "MangaDex"

    paperbackSourceRepository = PaperbackRepository.STATEFUL

    /*
        mangaID:
            Tachiyomi: "/manga/090ea171-2896-42b9-b29f-03f92d88d3af"
            Paperback: "090ea171-2896-42b9-b29f-03f92d88d3af"
        chapterId
            Tachiyomi: "/chapter/4199cec7-28cd-4dd2-8df1-31f1f4d6d2f4"
            Paperback: "4199cec7-28cd-4dd2-8df1-31f1f4d6d2f4"
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId.replace('/manga/', '')
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string { 
        return tachiyomiId.replace('/chapter/', '') 
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return "/manga/" + paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return "/chapter/" + paperbackId
    }

}