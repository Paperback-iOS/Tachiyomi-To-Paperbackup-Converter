import Axios from 'axios'
import {Response} from 'express'
import { Dictionary } from 'lodash'
import { AbstractConversionSource } from './ConversionSources/AbstractConversionSource'
import { MangadexConversionSource } from './ConversionSources/MangadexConversionSource'
import { MangaLifeConversionSource } from './ConversionSources/MangaLifeConversionSource'
import {ManganeloConversionSource} from './ConversionSources/ManganeloConversionSource'
import { PaperbackBackupObject } from './PaperbackDataTypes/PaperbackBackupObject'
import { PaperbackChapterMarkerObject } from './PaperbackDataTypes/PaperbackChapterMarkerObject'
import { PaperbackMangaObject } from './PaperbackDataTypes/PaperbackMangaObject'
import {TachiyomiObjectModel} from './proto/TachiyomiObjectModel'
import { RepositoryObject, RepositoryTag, SourceObject } from './Types/RepositoryObject'

export class ConversionManager {

    migrationSources: Dictionary<AbstractConversionSource> = {}
    aliveSources: Dictionary<SourceObject> = {}

    constructor() {
        // Add all of the available migration objects to the manager
        this.migrationSources[ManganeloConversionSource.tachiyomiSourceId.toString()] = new ManganeloConversionSource()
        this.migrationSources[MangaLifeConversionSource.tachiyomiSourceId.toString()] = new MangaLifeConversionSource()
        this.migrationSources[MangadexConversionSource.tachiyomiSourceId.toString()] = new MangadexConversionSource()

        // Grab the supported repositories and the metadata attached to such and add it to our aliveSources list
        this.getRepositories()
    }


    handleConversion(serverResponseObject: Response, unzippedFile) {

        // Load the protobuf tachiyomi backup file to an in-memory representation using a protocol buffer decoding process
        var decodedData = TachiyomiObjectModel.Backup.decode(unzippedFile)
        var convertedMangaObjects: PaperbackMangaObject[] = []
        var noConversionPossibleObjects: TachiyomiObjectModel.IBackupManga[] = []
        var convertedChapterObjects: PaperbackChapterMarkerObject[] = []

        // Create a converted manga object of each compatible entry
        for(let manga of decodedData.backupManga) {
            // If we support conversion of this entry, do such
            if(this.migrationSources[manga.source.toString()] !== undefined) {
                convertedMangaObjects.push(this.migrationSources[manga.source.toString()].parseMangaObject(manga))
                
                // For every read history inside of the object, generate a corresponding object
                for(let history of manga.history) {
                    convertedChapterObjects.push(this.migrationSources[manga.source.toString()].parseChapterObject(history, manga))
                }
            }

            // We don't know how to parse this object
            else {
                console.log(`Unable to process ${manga.source.toString()} - for object ${manga.title}`)
                noConversionPossibleObjects.push(manga)
            }
        }
        
        let returnVal = this.packMangaIntoBackup(convertedMangaObjects, convertedChapterObjects)
        return serverResponseObject.status(200).send(JSON.stringify(returnVal))
    }

    packMangaIntoBackup(manga: PaperbackMangaObject[], chapters: PaperbackChapterMarkerObject[]): PaperbackBackupObject {
        var paperbackBackupObject: PaperbackBackupObject = new PaperbackBackupObject()

        // Pack all of the manga objects into reading for now
        //TODO: Support other types of library
        for(let obj of manga) {
            paperbackBackupObject.appendReadingManga(obj)

            // Add this source to the backup list if it exists in our metadata list
            if(this.aliveSources[obj.sourceId] !== undefined) {
                paperbackBackupObject.appendActiveSource(this.aliveSources[obj.sourceId])
            }
        }

        // Append each chapter marker to our backup file
        for(let obj of chapters) {
            paperbackBackupObject.appendChapterMarker(obj)
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
            source.repo = res.config.url.replace('/versioning.json', '')
            source.icon = obj.icon

            this.aliveSources[source.name] = source
        }

        // Log to console the repository name as info
        let repoName = res.config.url.match(/\.io\/(.+)\/versioning.json/)[1]
        console.log(`[Info] Registered repository ${repoName}`)
    }
}