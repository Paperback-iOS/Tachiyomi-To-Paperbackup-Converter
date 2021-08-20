export namespace LightRepresentation {

    export interface Backup {
        library:             Title[],
        tabs:                Tab[],
        sources:             Source[]
    }

    export interface Title {
        titles:         string[],
        author:         string,
        artist:         string,
        description:    string,
        cover:          string,
        hentai:         boolean,
        tabs:           Tab[],
        sources:        Source[]
    }

    export interface Source {
        id:             string,
        name:           string
    }

    export interface Tab {
        id:             string,
        name:           string
    }
}