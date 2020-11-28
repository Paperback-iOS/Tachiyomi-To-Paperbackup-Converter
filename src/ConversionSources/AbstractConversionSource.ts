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
     * Return both the manga ID, and the chapter ID
     */
    abstract parseChapterId(tachiyomiId): {mangaId: string, chapterId: string}

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
        let tags: string[] = []
        for(let genre of manga.genre) {
            tags.push(genre)
        }
        obj.object.tags.push({id: "0", label: "genres", tags: tags})

        obj.object.titles.push(manga.title)
        obj.object.image = manga.thumbnailUrl
        obj.object.relatedManga = []                       // Not supported
        obj.object.hentai = false;                         // Not supported, which is kinda awkward, so flag everything as false so nothing is hidden by default
        obj.object.langName = "Unknown"                           // Not supported
        obj.object.artist = manga.artist
        obj.object.status = manga.status.toString()        // Long cannot be converted to number, tachiyomi has this as a long. I hope this works
        obj.object.avgRating = 0                           // Not supported


        return obj
    }

    parseChapterObject(chapter: TachiyomiObjectModel.IBackupChapter): PaperbackChapterMarkerObject {
        let obj = new PaperbackChapterMarkerObject()

        let chapterDetails = this.parseChapterId(chapter.url)
        obj.chapterId = chapterDetails.chapterId
        obj.mangaId = chapterDetails.mangaId
        obj.lastPage = chapter.lastPageRead
        obj.time = Number(chapter.dateFetch)
        obj.totalPages = chapter.lastPageRead   // This may be wrong?
        obj.sourceId = this.paperbackSourceName

        return obj
    }

}