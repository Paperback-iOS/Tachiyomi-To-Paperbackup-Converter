export namespace LightRepresentation {

    /**
     * A simple representation of the main content of a backup. Easily exploitable to display the content of a backup.
     * @param library - a list of titles
     * @param tabs - a dictionary of `{tabId: tabName}`
     * @param sources - a dictionary of `{sourceId: sourceName}`
     */
    export interface Backup {
        library:        Title[],
        tabs:           {[id: string]: string},
        sources:        {[id: string]: string}
    }

    export interface Title {
        id:             string,
        titles:         string[],
        author:         string,
        artist:         string,
        description:    string,
        cover:          string,
        hentai:         boolean,
        tabsIds:        string[],
        sourcesIds:     string[]
    }

}