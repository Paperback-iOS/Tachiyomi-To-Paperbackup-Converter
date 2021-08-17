/**
 * Convert a Tachiyomi backup using {@link TachiToPaperBackupConverter}
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/convertTachiToPaperBackup.ts 
 * ```
 */

import { readFileSync, writeFile } from "fs"
import { TachiToPaperBackupConverter } from "../src/BackupConverters/TachiToPaperBackupConverter"
import { TachiyomiBackupManager } from "../src/Tachiyomi/TachiyomiBackupManager"

const path = 'ressources/backup-examples/tachiyomi_six_titles_various_sources.proto.gz'
const outputPath = 'ressources/converted-backup-examples/PaperExp-tachiyomi_six_titles_various_sources.json'

const protoGzFile = readFileSync(path)

const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiBackup = tachiyomiBackupManager.exportBackup()

const convertionManager = new TachiToPaperBackupConverter(tachiyomiBackup)

convertionManager.conversion()
    .then((paperbackBackup) => {
        writeFile(outputPath, JSON.stringify(paperbackBackup), (err) => {
            if (err) throw err;

            console.log('Backup saved!');
        })
    })