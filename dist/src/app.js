"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConversionManager_1 = require("./ConversionManager");
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser');
const asyncgunzip = require('async-gzip-gunzip').asyncGunzip;
const port = process.env.PORT || "3000";
//app.use(bodyParser.json({limit: "400mb"}))
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: 2,
    debug: true
}));
app.post('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded");
        }
        let uploadedFile = req.files.backupFile;
        // Ensure that we were given a .gz file 
        if (uploadedFile.mimetype != "application/gzip") {
            return res.status(400).send("This does not appear to be a Tachiyomi backup, file extension should be .gz");
        }
        // Decompress the file
        let conversionManager = new ConversionManager_1.ConversionManager();
        conversionManager.handleConversion(res, yield asyncgunzip(uploadedFile.data));
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map