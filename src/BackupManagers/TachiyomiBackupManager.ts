import { Reader } from "protobufjs";
import { LightRepresentation } from "../LightRepresentation/LightRepresentation";
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"

const pako = require('pako');

export class TachiyomiBackupManager {
    
    // We don't use the IBackup interface but the Backup class.
    private backup: TachiyomiObjectModel.Backup

    constructor() {
        this.backup = this.returnEmptyBackup()
    }

    returnEmptyBackup(): TachiyomiObjectModel.Backup {
        return new TachiyomiObjectModel.Backup()
    }

    /* Loading a backup */

    loadBackup(backup: TachiyomiObjectModel.Backup) {
        this.backup = backup
    }

    loadIBackup(iBackup: TachiyomiObjectModel.IBackup) {
        const backup = new TachiyomiObjectModel.Backup(iBackup)
        this.loadBackup(backup)
    }

    /**
     * Decode and load a `.proto` buffered backup
     * @param protoBackup - a `Reader | Uint8Array` object
     */
    loadProto(protoBackup: Reader | Uint8Array) {
        const backup = TachiyomiObjectModel.Backup.decode(protoBackup)
        this.loadBackup(backup)
    }

    /**
     * Inflate, decode and load a `.proto.gz` buffered backup
     * @param protoBackup - a `Reader | Uint8Array` object
     */
    loadProtoGz(protoGzBackup: Uint8Array) {
        const protoBackup = pako.inflate(protoGzBackup)
        this.loadProto(protoBackup)
    }

    /* Exporting a backup */
    
    exportBackup(): TachiyomiObjectModel.Backup {
        return this.backup
    }

    exportIBackup(): TachiyomiObjectModel.IBackup {
        return TachiyomiObjectModel.Backup.toObject(this.backup)
    }

    /**
     * Encode and export the `.proto` buffered backup
     * @returns a {@link Uint8Array}
     */
    exportProto(): Uint8Array {
        // WARNING: including non empty backupManga.categories result in an error
        // "Expecting wire type 0 byt found 2" when the backup is restored on Tachiyomi

        const writer = TachiyomiObjectModel.Backup.encode(this.backup)
        // We must call finish() to obtain an usable Buffer
        // https://github.com/protobufjs/protobuf.js/#using-proto-files
        const buffer = writer.finish()  
        return buffer
    }

    /**
     * Encode, gzip and export the `.proto` buffered backup
     * @returns a {@link Uint8Array}
     */
    exportProtoGz(): Uint8Array {
        const protoBackup = this.exportProto()
        const protoGzBackup = pako.gzip(protoBackup)
        return protoGzBackup
    }

    /**
     * @returns A {@link LightRepresentation} of the backup, easily exploitable to display the principal content of the backup.
     */
     exportLightRepresentation(): LightRepresentation.Backup {
        const library: LightRepresentation.Title[] = []

        const tabs: {[id: string]: string} = {}
        const sources: {[id: string]: string} = {}

        // Manga parsing
        for (const manga of this.backup.backupManga) {

            let tabsIds: string[] = []
            if (manga.categories != undefined) {
                tabsIds = manga.categories.map(id => id.toString())
            }

            // In a Tachiyomi backup, a manga is associated with an unique source
            const sourcesIds = (manga.source) ? [manga.source.toString()] : [""]

            library.push({
                id:             manga.url ?? "",
                titles:         [manga.title ?? ""],
                author:         manga.author ?? "",
                artist:         manga.artist ?? "",
                description:    manga.description ??  "",
                cover:          manga.thumbnailUrl ?? "",
                hentai:         false,                      // Does not exist in the backup
                tabsIds:        tabsIds,
                sourcesIds:     sourcesIds
            })
        }

        // Tabs/categories parsing
        for (let index = 0; index < this.backup.backupCategories.length; index++) {
            tabs[index] = this.backup.backupCategories[index].name ?? "unnamed"
        }

        // Sources parsing
        for (const source of this.backup.backupSources) {
            if (source.sourceId != undefined) {
                const id = source.sourceId!.toString()
                sources[id] = source.name ?? id  // If the source name does not exist, we use its id
            }
        }

        return {
            library:             library,
            tabs:                tabs,
            sources:             sources
        }
    }

    /* Helper functions */

    appendBackupManga(backupManga: TachiyomiObjectModel.IBackupManga) {
        const backupMangaObject = TachiyomiObjectModel.BackupManga.create(backupManga)
        this.backup.backupManga.push(backupMangaObject)
    }

    appendCategory(category: TachiyomiObjectModel.IBackupCategory) {
        const categoryObject = TachiyomiObjectModel.BackupCategory.create(category)
        this.backup.backupCategories.push(categoryObject)
    }

    appendSource(source: TachiyomiObjectModel.IBackupSource) {
        const sourceObject = TachiyomiObjectModel.BackupSource.create(source)
        this.backup.backupSources.push(sourceObject)
    }

}