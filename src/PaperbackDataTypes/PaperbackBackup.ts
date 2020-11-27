import { AbstractConversionSource } from "../ConversionSources/AbstractConversionSource"
import { TachiyomiObjectModel } from "../proto/TachiyomiObjectModel"

class PaperbackBackup {

    targetSource: AbstractConversionSource

    constructor(source: AbstractConversionSource) {
        this.targetSource = source
    }

    createBackup(tachiyomiBackup: TachiyomiObjectModel.Backup): string {

        // Create the scaffold for the backup
        var obj = {
            date: 0,
            library: {
                1: [],          // Reading tag in library
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            },
            sourceRepositories: [],
            activeSources: [],
            chapterMarkers: [],
            version: "v0.3.0-b11.0.37"      // Ideally this version value should be incremented, but we'll leave it like this as we know this structure is valid for this version
        }
    
        // For each of the manga 
        return JSON.stringify(obj)
    }

}