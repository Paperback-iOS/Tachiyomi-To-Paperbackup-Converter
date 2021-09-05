/**
 * Use a {@link TachiyomiBackupManager} to unpack a .proto.gz Tachiyomi backup and save it to JSON
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/decodeProtoGzToJSONTachiBackup.ts
 * ```
 */

import { existsSync, mkdir, mkdirSync, readFileSync, writeFile } from "fs"
import { basename } from "path"
import { TachiyomiBackupManager } from "../src/BackupManagers/TachiyomiBackupManager"

const backupPath = 'ressources/backup-examples/tachiyomi_six_titles_various_sources.proto.gz'
const outputDirectory = 'ressources/exported-backup-examples/'

const protoGzFile = readFileSync(backupPath)

const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiIBackup = tachiyomiBackupManager.exportIBackup()


if (!existsSync(outputDirectory)){
    mkdirSync(outputDirectory)
}
const outputPath = outputDirectory + 'TachiBackupDecoded-' + basename(backupPath).replace('.proto.gz', '.json')
writeFile(outputPath, JSON.stringify(tachiyomiIBackup), (err) => {
    if (err) throw err;
    console.log('Backup saved saved!');
})