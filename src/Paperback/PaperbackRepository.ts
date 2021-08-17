import axios from "axios";
import { PaperbackBackup } from "./PaperbackBackup";

export namespace PaperbackRepository {
    /*
        Some known Paperback repositories that can be used for conversionSources
    */
    export const STATEFUL: PaperbackBackup.SourceRepository = {
        name: "Extensions Primary",
        url:  "https://paperback-ios.github.io/extensions-sources/primary"
    }
    export const PROMISES: PaperbackBackup.SourceRepository = {
        name: "Extensions Promises",
        url:  "https://paperback-ios.github.io/extensions-promises"
    }

    /**
     * Fetch the repository versioning.json file
     * @param url the repository base URL
     * @returns a `Promise<versioningFile>`
     */
    export async function getRepositoryVersioning(baseURL: string): Promise<versioningFile> {
        try {
            const response = await axios.get(baseURL + "/versioning.json")

            return response.data as versioningFile

        } catch (error) {
            // On error, we return an empty repository to prevent the converter from retrying to fetch the repository for every sources
            console.log("Failed to fetch repository : " + baseURL)
            console.log(error);
            return {
                buildTime: "2021-08-09T14:19:47.235Z",
                sources: []
            }
        }

    }

    export interface versioningFile {
        buildTime: string
        sources: sourceData[]
    }

    // sourceData is slightly different from PaperbackBackup.ActiveSource
    export interface sourceData {
        id: string
        name: string
        author: string
        desc: string
        website: string
        contentRating?: string      // Does not exist on old extensions-common version (app version 0.5 and prior)
        version: string
        icon: string
        tags: {text: string, type: string}[]
        websiteBaseURL: string
    }
}