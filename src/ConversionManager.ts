import Axios from 'axios'
import {Response} from 'express'
import { Dictionary } from 'lodash'
import { AbstractConversionSource } from './ConversionSources/AbstractConversionSource'
import {ManganeloConversionSource} from './ConversionSources/ManganeloConversionSource'
import { PaperbackBackupObject } from './PaperbackDataTypes/PaperbackBackupObject'
import { PaperbackMangaObject } from './PaperbackDataTypes/PaperbackMangaObject'
import {TachiyomiObjectModel} from './proto/TachiyomiObjectModel'
import { RepositoryObject, RepositoryTag, SourceObject } from './Types/RepositoryObject'

export class ConversionManager {

    migrationSources: Dictionary<AbstractConversionSource> = {}
    aliveRepositories: RepositoryObject[]

    constructor() {
        // Add all of the available migration objects to the manager
        this.migrationSources[ManganeloConversionSource.tachiyomiSourceId.toString()] = new ManganeloConversionSource()

        // Grab the supported repositories and the metadata attached to such and add it to our AliveRepositories list
        this.aliveRepositories = []
        this.getRepositories()
    }


    handleConversion(serverResponseObject: Response, unzippedFile) {

        // Load the protobuf tachiyomi backup file to an in-memory representation using a protocol buffer decoding process
        var decodedData = TachiyomiObjectModel.Backup.decode(unzippedFile)
        var convertedMangaObjects: PaperbackMangaObject[] = []
        var noConversionPossibleObjects: TachiyomiObjectModel.IBackupManga[] = []

        // Create a converted manga object of each compatible entry
        for(let manga of decodedData.backupManga) {
            // If we support conversion of this entry, do such
            if(this.migrationSources[manga.source.toString()] !== undefined) {
                convertedMangaObjects.push(this.migrationSources[manga.source.toString()].parseMangaObject(manga))
            }

            // We don't know how to parse this object
            else {
                noConversionPossibleObjects.push(manga)
            }
        }
        
        let returnVal = this.packMangaIntoBackup(convertedMangaObjects)
        return serverResponseObject.status(200).send(JSON.stringify(returnVal))
    }

    packMangaIntoBackup(manga: PaperbackMangaObject[]): PaperbackBackupObject {
        var paperbackBackupObject: PaperbackBackupObject = new PaperbackBackupObject()

        // Pack all of the manga objects into reading for now
        //TODO: Support other types of library
        for(let obj of manga) {
            paperbackBackupObject.appendReadingManga(obj)
        }

        return paperbackBackupObject
    }

    getRepositories() {

        // Official repository sources metadata fetch
        Axios.get("https://paperback-ios.github.io/extensions-beta/versioning.json")
            .then(res => {this.registerRepository(res)})

        // H-Extensions
        Axios.get("https://paperback-ios.github.io/h-extensions/versioning.json")
            .then(res => {this.registerRepository(res)})

    }

    registerRepository(res) {
        let response = res.data
        let repository = new RepositoryObject()
        
        for(let obj of response.sources) {
            // Verbose mapping so that if the format changes, a reflection function doesn't error
            let source = new SourceObject()
            source.id = obj.id
            source.name = obj.name
            source.author = obj.author
            source.desc = obj.desc
            source.website = obj.website
            source.version = obj.version
            source.tags = []

            for(let tag of obj.tags) {
                let tagObj = new RepositoryTag()
                tagObj.text = tag.text
                tagObj.type = tag.type

                source.tags.push(tagObj)
            }

            source.websiteBaseURL = obj.websiteBaseURL
            repository.sources.push(source)
        }

        this.aliveRepositories.push(repository)
        // Log to console the repository name as info
        let repoName = res.config.url.match(/\.io\/(.+)\/versioning.json/)[1]
        console.log(`[Info] Registered repository ${repoName}`)
    }
}