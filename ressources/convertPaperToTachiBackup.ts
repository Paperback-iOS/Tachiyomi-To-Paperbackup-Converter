/**
 * Convert a Paperback backup using {@link PaperToTachiBackupConverter}
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/convertPaperToTachiBackup.ts 
 * ```
 */

import { existsSync, mkdirSync, readFileSync, writeFile } from "fs"
import { PaperToTachiBackupConverter } from "../src/BackupConverters/PaperToTachiBackupConverter"
import { PaperbackBackup } from "../src/Paperback/PaperbackBackup"
import { TachiyomiBackupManager } from "../src/BackupManagers/TachiyomiBackupManager"
import { basename } from "path"

const backupPath = 'ressources/backup-examples/paperback_backup.json'
const outputDirectory = 'ressources/converted-backup-examples/'

const backupFile = readFileSync(backupPath, 'utf-8')

const paperbackBackup: PaperbackBackup.Backup = JSON.parse(backupFile)

const convertionManager = new PaperToTachiBackupConverter(paperbackBackup)

convertionManager.conversion()
    .then((tachiyomiBackup) => {

        const backupManager = new TachiyomiBackupManager()
        backupManager.loadBackup(tachiyomiBackup)
        const protoGzBackup = backupManager.exportProtoGz()

        if (!existsSync(outputDirectory)){
            mkdirSync(outputDirectory)
        }
        const outputPath = outputDirectory + 'ExpToTachi-' + basename(backupPath).replace('.json', '.proto.gz')
        writeFile(outputPath, protoGzBackup, (err) => {
            if (err) throw err;
            console.log('Backup saved!');
        })
    })
