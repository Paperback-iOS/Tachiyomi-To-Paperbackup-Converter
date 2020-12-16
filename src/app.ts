import {ConversionManager} from './ConversionManager'
const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express();
const asyncgunzip = require('async-gzip-gunzip').asyncGunzip
const path = require('path')
const io = require('@pm2/io')

var meter = io.meter({
    name : 'req/min',
    samples: 1,
    timeframe: 60
})

var counter = io.counter({
    name: 'Requests since last restart'
})

const port = process.env.PORT || "3000";

const conversionManager = new ConversionManager()

app.use(cors())
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: 2,
    debug: false
}))

app.set('trust proxy', true)

// Include the javascript files with express
app.use(express.static(__dirname + '/public/js'))

// Broadcast a CORS accept for things outside of our local domain
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/', function (req, res) {
//     // Send the main page
//     res.sendFile(path.join(__dirname + '/public/index.html'))
// })

app.post('/', async function (req, res) {

    console.log('Processing request for ' + req.header('x-forwarded-for') || req.connection.remoteAddress)
    meter.mark()
    counter.inc()

    if(!req.files || Object.keys(req.files).length === 0) {
	console.log('No files uploaded for request')
        return res.status(400).send("No files were uploaded")
    }
    let uploadedFile = req.files.backupFile

    // Ensure that we were given a .gz file
    if(uploadedFile.mimetype != "application/x-gzip" && uploadedFile.mimetype != "application/gzip") {
	console.log('Incorrect file format uploaded, given ' + uploadedFile.mimetype)
        return res.status(400).send("This does not appear to be a Tachiyomi backup, file extension should be .gz")
    }

    // Decompress and process this file
    try {
        let decompressedData = await asyncgunzip(uploadedFile.data) // Attempt to decompress the gzip file, warning if something goes wrong
        conversionManager.handleConversion(res, decompressedData)       // Response to client is handled inside of here
    }
    catch (ex){
        return res.status(400).send("Failed to convert due to a source translation problem." + ex)
    }
    
})

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});




