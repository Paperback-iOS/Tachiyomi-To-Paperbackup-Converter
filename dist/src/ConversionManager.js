"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protobufjs_1 = require("protobufjs");
const ManganeloConversionSource_1 = require("./ConversionSources/ManganeloConversionSource");
class ConversionManager {
    constructor() {
        // Add all of the available migration objects to the manager
        this.migrationSources.push(new ManganeloConversionSource_1.ManganeloConversionSource());
    }
    handleConversion(serverResponseObject, unzippedFile) {
        // Load the protobuf tachiyomi backup file to an in-memory representation
        protobufjs_1.load(unzippedFile, function (err, root) {
            console.log("Ree?");
        });
    }
}
exports.ConversionManager = ConversionManager;
//# sourceMappingURL=ConversionManager.js.map