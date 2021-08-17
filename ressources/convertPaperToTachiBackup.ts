/**
 * Convert a Paperback backup using {@link PaperToTachiBackupConverter}
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/convertPaperToTachiBackup.ts 
 * ```
 */

import { mkdir, readFileSync, writeFile } from "fs"
import { PaperToTachiBackupConverter } from "../src/BackupConverters/PaperToTachiBackupConverter"
import { PaperbackBackup } from "../src/Paperback/PaperbackBackup"
import { TachiyomiBackupManager } from "../src/Tachiyomi/TachiyomiBackupManager"

const path = 'ressources/backup-examples/paperback_backup.json'
const outputPath = 'ressources/converted-backup-examples/TachiExp-paperback_backup.proto.gz'

const backupFile = readFileSync(path, 'utf-8')

const paperbackBackup: PaperbackBackup.Backup = JSON.parse(backupFile)

const convertionManager = new PaperToTachiBackupConverter(paperbackBackup)

convertionManager.conversion()
    .then((tachiyomiBackup) => {

        const backupManager = new TachiyomiBackupManager()
        backupManager.loadBackup(tachiyomiBackup)
        const protoGzBackup = backupManager.exportProtoGz()

        mkdir('ressources/converted-backup-examples', (err) => {
            if (err) throw err;
        });
        writeFile(outputPath, protoGzBackup, (err) => {
            if (err) throw err;

            console.log('Backup saved!');
        })
    })
