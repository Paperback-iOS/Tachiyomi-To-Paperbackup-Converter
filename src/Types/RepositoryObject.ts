import { stringify } from "querystring";

export class RepositoryObject {
    sources: SourceObject[]

    constructor() {
        this.sources = []
    }
}

export class SourceObject {
    id: string;
    name: string ;
    author: String
    desc: string;
    website: string;
    version: String
    icon: string | null
    tags: RepositoryTag[]
    websiteBaseURL: string

    constructor() {
        // Initialize the array so it can be pushed to
        this.tags = []
    }
}

export class RepositoryTag {
    text: string
    type: string

    constructor() {
    }
}