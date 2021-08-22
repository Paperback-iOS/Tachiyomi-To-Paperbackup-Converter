import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"

/**
 * An abstract class which facilitates a proper migration between a Tachiyomi and a Paperback source
 * 
 * The function {@link getConversionSourcesList} should be modified when a new source converter is added
 */
export abstract class AbstractConversionSource {

    /**
     * List of Tachiyomi source ids
     * 
     * Because Tachiyomi use distinct sources for each language, there may be more than one id.
     * By default, the first one will be used.
     * If it exist, the `all` version of the source should be placed at the beginning.
     * 
     * Tachiyomi ids are available in the {@link https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/index.json tachiyomi-extensions index}
     */
    abstract tachiyomiSourceIds: string[]

    /**
     * Paperback source id
     */
    abstract paperbackSourceId: string

    /**
     * A {@link PaperbackBackup.SourceRepository} object of a repository containing the source.
     * Should be a constant from {@link PaperbackRepository}
     * It will be used to make a request to get the repository versioning file, to have additional info about the source
     */
    abstract paperbackSourceRepository: PaperbackBackup.SourceRepository

    /**
     * A method which takes a Tachiyomi Manga ID, the identifier which points to a given manga,
     * and converts it to something which the affiliated Paperback source can understand
     * 
     * @param tachiyomiId - Tachiyomi manga id
     * @param mangaInfo - A {@link TachiyomiObjectModel.IBackupManga}, the manga section from the backup.
     * 
     * @remarks mangaInfo is provided in this method as some sources, like Guya, need more information about the manga to convert the id.
     * It may not be used
     * 
     * @return The converted Paperback manga id
     */
    abstract parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string

    /**
     * A method which takes a Tachiyomi CHAPTER id, and converts it to something Paperback can read.
     * Example: Tachiyomi might send '/chapter/dj919202/chapter_4' as a chapter, where Paperback may only need 'dj919202/chapter_4'
     * 
     * @param tachiyomiId - Tachiyomi chapter id
     * @param mangaInfo - A {@link TachiyomiObjectModel.IBackupManga}, the manga section from the backup.
     * 
     * @remarks mangaInfo is provided in this method as some sources, like Guya, need more information about the manga to convert the id.
     * It may not be used
     * 
     * @return The converted Paperback chapter id
     */
    abstract parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string

    /**
     * A method which takes a Paperback Manga ID, the identifier which points to a given manga,
     * and converts it to something which the affiliated Tachiyomi source can understand
     * 
     * @param paperbackId - Paperback manga id
     * @param mangaInfo - A {@link PaperbackBackup.SourceManga}, the manga section from the backup.
     * 
     * @remarks mangaInfo is provided in this method as some sources, like Guya, need more information about the manga to convert the id.
     * It may not be used
     * 
     * @return The converted Tachiyomi manga id
     */
     abstract parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string

     /**
     * A method which takes a Paperback CHAPTER id, and converts it to something Tachiyomi can read.
     * Example: Paperback might send '/chapter/dj919202/chapter_4' as a chapter, where Tachiyomi may only need 'dj919202/chapter_4'
     * 
     * @param paperbackId - Paperback chapter id
     * @param mangaInfo - A {@link PaperbackBackup.SourceManga}, the manga section from the backup.
     * 
     * @remarks mangaInfo is provided in this method as some sources, like Guya, need more information about the manga to convert the id.
     * It may not be used
     * 
     * @return The converted Tachiyomi chapter id
     */
    abstract parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string

    /**
     * Return the first Tachiyomi source id
     * @remarks The first id will be used during the conversion from Paperback to Tachiyomi, independently of its language. 
     * Paperback have indeed only one multi-languages source when Tachiyomi use a different source for each language.
     * @returns a Tachiyomi source id
     */
    getMainTachiyomiSourceId(): string {
        return this.tachiyomiSourceIds[0]
    }
}