"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractConversionSource_1 = require("../AbstractConversionSource");
class ManganeloConversionSource extends AbstractConversionSource_1.AbstractConversionSource {
    constructor() {
        super(...arguments);
        this.tachiyomiSourceId = 1024627298672457500; // Tachiyomi calls Manganelo this value
        this.tachiyomiSourceName = "Manganelo"; // A user friendly identifier for this tachiyomi source
        this.paperbackSourceName = "Manganelo"; // In this case, the source ID in Paperback is also Manganelo!
    }
    parseMangaId(tachiyomiId) {
        // Tachiyomi for this source returns things of format '/manga/dj919202' where paperback just needs the 'dj919202' bits
        return tachiyomiId.replace('/manga/', '');
    }
    parseChapterId(tachiyomiId) {
        // '/chapter/dj919202/chapter_4' is an example of what we might see
        let cutId = tachiyomiId.replace('/chapter/', '');
        let splitVal = cutId.split('/');
        return { mangaId: splitVal[0], chapterId: splitVal[1] };
    }
}
exports.ManganeloConversionSource = ManganeloConversionSource;
//# sourceMappingURL=ManganeloConversionSource.js.map