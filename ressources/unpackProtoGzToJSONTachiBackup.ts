/**
 * Use a {@link TachiyomiBackupManager} to unpack a .proto.gz Tachiyomi backup and save it to JSON
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/unpackProtoGzToJSONTachiBackup.ts
 * ```
 */

import { readFileSync, writeFile } from "fs"
import { TachiyomiBackupManager } from "../src/Tachiyomi/TachiyomiBackupManager"

const path = 'ressources/backup-examples/tachiyomi_six_titles_various_sources.proto.gz'
const outputPath = 'ressources/exported-backup-examples/tachiyomi_six_titles_various_sources.json'

const protoGzFile = readFileSync(path)

const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiIBackup = tachiyomiBackupManager.exportIBackup()

writeFile(outputPath, JSON.stringify(tachiyomiIBackup), (err) => {
        if (err) throw err;

        console.log('Backup saved saved!');
})