import { PaperbackChapterMarkerObject } from "../PaperbackDataTypes/PaperbackChapterMarkerObject"
import { PaperbackMangaObject } from "../PaperbackDataTypes/PaperbackMangaObject"
import { TachiyomiObjectModel } from "../proto/TachiyomiObjectModel"

/**
 * An abstract class which facilitates a proper migration between a Tachiyomi source, and a Paperback representation
 */
export abstract class AbstractConversionSource {

    static tachiyomiSourceId: string
    abstract tachiyomiSourceName: string
    abstract paperbackSourceName: string

    /**
     * A method which takes a Tachiyomi Manga ID, the identifier which points to a given manga,
     * and converts it to something which the affiliated paperback source can understand
     */
    abstract parseMangaId(tachiyomiId: string)

    /**
     * A method which takes a Tachiyomi CHAPTER id, and converts it to something Paperback can read.
     * Example: Tachiyomi might send '/chapter/dj919202/chapter_4' as a chapter, where Paperback may only need 'dj919202/chapter_4'
     */
    abstract parseChapterId(tachiyomiId): string

    parseMangaObject(manga: TachiyomiObjectModel.IBackupManga): PaperbackMangaObject {

        let obj = new PaperbackMangaObject(this.paperbackSourceName)

        obj.object.author = manga.author

        obj.object.rating = 0                              // Ratings do not exist in Tachiyomi backups
        obj.object.id = this.parseMangaId(manga.url)
        obj.object.description = manga.description
        obj.object.follows = 0                             // Follows do not exist in Tachiyomi backups
        obj.object.views = 0                               // Views do not exist in Tachiyomi backups
        obj.object.langFlag = "_unknown"                   // Language flag does not exist in Tachiyomi backups
        obj.object.lastUpdate = new Date().toDateString()
        
        // Grab all of the tags
        let tags: {id: string, value: string}[] = []
        for(let genre of manga.genre) {
            tags.push({id: genre, value: genre})
        }
        obj.object.tags.push({id: "0", label: "genres", tags: tags})

        obj.object.titles.push(manga.title)
        obj.object.image = manga.thumbnailUrl
        obj.object.relatedManga = []                       // Not supported
        obj.object.hentai = false;                         // Not supported, which is kinda awkward, so flag everything as false so nothing is hidden by default
        obj.object.langName = "Unknown"                           // Not supported
        obj.object.artist = manga.artist
        obj.object.status = Number(manga.status.toString())                  // Long cannot be converted to number, tachiyomi has this as a long. I hope this works
        obj.object.avgRating = 0                           // Not supported


        return obj
    }

    parseChapterObject(history: TachiyomiObjectModel.IBackupHistory, sourceManga: TachiyomiObjectModel.IBackupManga): PaperbackChapterMarkerObject {
        let obj = new PaperbackChapterMarkerObject()

        // Get the corresponding chapter details for this history element
        let backupChapter: TachiyomiObjectModel.IBackupChapter
        for(let obj of sourceManga.chapters) {
            if(history.url == obj.url) {
                backupChapter = obj
                break
            }
        }

        // You should never hit this error, but if Tachiyomi somehow has a history element without a corresponding chapter, don't fill data
        if(backupChapter === undefined) {
            return obj
        }

        obj.chapterId = this.parseChapterId(history.url)
        obj.mangaId = this.parseMangaId(sourceManga.url)
        obj.lastPage = backupChapter.lastPageRead
        obj.time = Number(backupChapter.dateFetch)
        obj.totalPages = backupChapter.lastPageRead   // This may be wrong?
        obj.sourceId = this.paperbackSourceName

        return obj
    }

}