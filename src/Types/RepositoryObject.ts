import { stringify } from "querystring";

export class RepositoryObject {
    name: string;
    url: string
    
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url
    }
}

export class SourceObject {
    id: string;
    name: string ;
    author: String
    desc: string;
    website: string;
    version: String
    icon: string
    repo: string
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