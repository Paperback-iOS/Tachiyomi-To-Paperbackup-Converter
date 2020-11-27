"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaperbackBackup {
    constructor(source) {
        this.targetSource = source;
    }
    createBackup(tachiyomiJsonBody) {
        // Create the scaffold for the backup
        var obj = {
            date: 0,
            library: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            },
            sourceRepositories: [],
            activeSources: [],
            chapterMarkers: [],
            version: "v0.3.0-b11.0.37" // Ideally this version value should be incremented, but we'll leave it like this as we know this structure is valid for this version
        };
        return JSON.stringify(obj);
    }
}
//# sourceMappingURL=PaperbackBackup.js.map