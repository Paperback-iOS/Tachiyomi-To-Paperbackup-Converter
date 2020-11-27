import {ConversionManager} from './ConversionManager'
const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express();
const asyncgunzip = require('async-gzip-gunzip').asyncGunzip

const port = process.env.PORT || "3000";

app.use(cors())
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: 2,
    debug: true
}))

// Broadcast a CORS accept for things outside of our local domain
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', async function (req, res) {

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded")
    }
    let uploadedFile = req.files.backupFile

    // Ensure that we were given a .gz file 
    if(uploadedFile.mimetype != "application/gzip") {
        return res.status(400).send("This does not appear to be a Tachiyomi backup, file extension should be .gz")
    }

    // Decompress and process this file
    let conversionManager = new ConversionManager()
    conversionManager.handleConversion(res, await asyncgunzip(uploadedFile.data))       // Response to client is handled inside of here
})

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }

    console.log(app)

    return console.log(`server is listening on ${port}`);
});




