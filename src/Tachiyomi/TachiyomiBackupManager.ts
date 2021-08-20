import { Reader } from "protobufjs";
import { TachiyomiObjectModel } from "./proto/TachiyomiObjectModel"

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


    loadProto(protoBackup: Reader | Uint8Array) {
        const backup = TachiyomiObjectModel.Backup.decode(protoBackup)
        this.loadBackup(backup)
    }

    loadProtoGz(protoGzBackup: Uint8Array) {
        const protoBackup = pako.inflate(protoGzBackup)
        this.loadProto(protoBackup)
    }

    /* Exporting a backup */
    
    exportBackup(): TachiyomiObjectModel.Backup {
        return this.backup
    }

    exportIBackup() {
        return TachiyomiObjectModel.Backup.toObject(this.backup)
    }

    exportProto(): Uint8Array {
        // WARNING including non empty backupManga.categories result in an error
        // "Expecting wire type 0 byt found 2"

        const writer = TachiyomiObjectModel.Backup.encode(this.backup)
        // We must call finish() to obtain an usable Buffer
        // https://github.com/protobufjs/protobuf.js/#using-proto-files
        const buffer = writer.finish()  
        return buffer
    }

    exportProtoGz() {
        const protoBackup = this.exportProto()
        const protoGzBackup = pako.gzip(protoBackup)
        return protoGzBackup
    }

    /* Helper functions */

    appendBackupManga(backupManga: TachiyomiObjectModel.IBackupManga): void {
        const backupMangaObject = TachiyomiObjectModel.BackupManga.create(backupManga)
        this.backup.backupManga.push(backupMangaObject)
    }

    appendCategory(category: TachiyomiObjectModel.IBackupCategory): void {
        const categoryObject = TachiyomiObjectModel.BackupCategory.create(category)
        this.backup.backupCategories.push(categoryObject)
    }

}