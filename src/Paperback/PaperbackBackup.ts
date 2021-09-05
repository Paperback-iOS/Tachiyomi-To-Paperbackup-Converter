export namespace PaperbackBackup {

    /**
     * Represent a `backupSchemaVersion 3` Paperback backup
     */
    export interface Backup {
        library:             LibraryManga[],
        sourceMangas:        SourceManga[],
        chapterMarkers:      ChapterMarker[],
        backupSchemaVersion: 3,
        date:                number,
        tabs:                LibraryTab[],
        version:             string,                // The version of application where the backup was created
        sourceRepositories:  SourceRepository[],
        activeSources:       ActiveSource[],
    }
    
    /**
     * @remarks Corresponding {@link LibraryManga} and {@link SourceManga} have the same `manga.id` identifier.
     * There can be multiple {@link SourceManga} for a {@link LibraryManga} with merged titles
     */
    export interface LibraryManga {
        lastRead:       number,
        manga:          MangaInfo,
        lastUpdated:    number,
        dateBookmarked: number,
        libraryTabs:    LibraryTab[],
        updates:        number,
    }
    
    /**
     * @remarks Corresponding {@link LibraryManga} and {@link SourceManga} have the same `manga.id` identifier.
     * There can be multiple {@link SourceManga} for a {@link LibraryManga} with merged titles
     */
    export interface SourceManga {
        mangaId:      string,                       // The source manga id 
        id:           string,                       // The app sourceManga id - an UUID v4
        manga:        MangaInfo,
        originalInfo: MangaInfo,
        sourceId:     string,                       // The source id
    }
    
    export interface ChapterMarker {
        totalPages: number,
        lastPage:   number,
        chapter?:   ChapterInfo,
        completed:  boolean,
        time:       number,
        hidden:     boolean,
    }
    
    export interface MangaInfo {
        id:             string,                     // The app mangaInfo id - an UUID v4
        rating?:        number,
        covers:         string[],
        author:         string,
        tags:           MangaInfoTag[],
        desc:           string,
        titles:         string[],
        image:          string,
        additionalInfo: MangaInfoAdditionalInfo,
        hentai:         boolean,
        artist:         string,
        status:         MangaStatus,
    }
    
    export interface ChapterInfo {
        chapNum:      number,
        mangaId:      string,                       // The source manga id 
        volume:       number,
        id:           string,                       // The source chapter id 
        time:         number,
        sortingIndex: number,
        sourceId:     string,                       // The source id
        group:        string,
        langCode:     string,
        name:         string,
    }
    
    export interface LibraryTab {
        id:        string,
        name:      string,
        sortOrder: number,
    }
    
    export interface MangaInfoTag {
        id:    string,
        label: string,
        tags:  {id: string, value: string}[],
    }
    
    export interface MangaInfoAdditionalInfo {
        langFlag:  string,
        users:     string,
        langName:  string,
        avgRating: string,
        views:     string,
        follows:   string,
    }
    
    export interface SourceRepository {
        name: string,
        url:  string,
    }
    
    export interface ActiveSource {
        author:         string,
        desc:           string,
        website:        string,
        id:             string,                     // The source id
        tags:           SourceTag[],
        contentRating:  string,
        websiteBaseURL: string,
        repo:           string,
        version:        string,
        icon:           string,
        name:           string,
    }
    
    export interface SourceTag {
        type: string,
        text: string,
    }

    export enum MangaStatus {
        ONGOING = "Ongoing",
        COMPLETED = "Completed",
        UNKNOWN = "Unknown",
        ABANDONED = "Abandoned",
        HIATUS = "Hiatus"
    }
}

