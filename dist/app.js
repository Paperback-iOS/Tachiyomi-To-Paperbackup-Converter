const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || "3000";
app.use(bodyParser.json({ limit: "400mb" }));
app.post('/', function (req, res) {
    let body = req.body;
    if (!validateTachiyomiSchema(body)) {
        // This isn't a tachiyomi schema that we can understand, fail
        res.status(400).send("I don't recgonize this as a Tachiyomi backup");
        return;
    }
    console.log("Yay");
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
function validateTachiyomiSchema(body) {
    // I can't be assed to use a proper library for this, so we're doing it manually
    // Check to see if the root nodes exist
    if (body.categories === undefined || body.extensions === undefined || body.mangas === undefined || body.version === undefined) {
        return false;
    }
    // We don't care about categories, check the extensions format 
    for (let obj of body.extensions) {
        // Formatted as '1024627298672457456:Manganelo' for example, make sure that this format is present
        if (obj.split(':').length < 2) {
            return false;
        }
    }
    // Validate manga formatting
    for (let obj of body.mangas) {
        // We don't care about tracking right now, ensure that the the manga, and chapters information are present
        for (let chapter of obj.chapters) {
            // This is a json object of 'r' (read, integer of either 1 or 0) and 'u' (the chapter ID ex: '/4-cut-hero/chapter-156-c710163.html')
            if (chapter.r === undefined || chapter.u === undefined) {
                return false;
            }
        }
        // Check that the manga data is correct, tachiyomi uses an array of length 5. 0 = ID (example: '/manga/read_akatsuki_no_yona_manga')
        // 1 = Title
        // 2 = Source ID (Kidna?)
        // 3 and 4 are unknown
        if (obj.manga.length != 5) {
            return false;
        }
        for (let mangaObj of obj.manga) {
            // Are there history elements?
            if (mangaObj.history === undefined || mangaObj.chapters === undefined) {
                return false;
            }
        }
    }
    return true;
}
//# sourceMappingURL=app.js.map