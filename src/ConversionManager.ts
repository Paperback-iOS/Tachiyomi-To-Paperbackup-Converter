import {Response} from 'express'
import { Dictionary } from 'lodash'
import { AbstractConversionSource } from './ConversionSources/AbstractConversionSource'
import {ManganeloConversionSource} from './ConversionSources/ManganeloConversionSource'
import { PaperbackBackupObject } from './PaperbackDataTypes/PaperbackBackupObject'
import { PaperbackMangaObject } from './PaperbackDataTypes/PaperbackMangaObject'
import {TachiyomiObjectModel} from './proto/TachiyomiObjectModel'


export class ConversionManager {

    migrationSources: Dictionary<AbstractConversionSource> = {}

    constructor() {
        // Add all of the available migration objects to the manager
        this.migrationSources[ManganeloConversionSource.tachiyomiSourceId.toString()] = new ManganeloConversionSource()
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
}