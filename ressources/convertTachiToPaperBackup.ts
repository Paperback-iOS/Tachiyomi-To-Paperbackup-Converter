/**
 * Convert a Tachiyomi backup using {@link TachiToPaperBackupConverter}
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/convertTachiToPaperBackup.ts 
 * ```
 */

import { existsSync, mkdir, mkdirSync, readFileSync, writeFile } from "fs"
import { basename } from "path"
import { TachiToPaperBackupConverter } from "../src/BackupConverters/TachiToPaperBackupConverter"
import { TachiyomiBackupManager } from "../src/BackupManagers/TachiyomiBackupManager"

const backupPath = 'ressources/backup-examples/tachiyomi_six_titles_various_sources.proto.gz'
const outputDirectory = 'ressources/converted-backup-examples/'

const protoGzFile = readFileSync(backupPath)

const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiBackup = tachiyomiBackupManager.exportBackup()

const convertionManager = new TachiToPaperBackupConverter(tachiyomiBackup)

convertionManager.conversion()
    .then((paperbackBackup) => {

        if (!existsSync(outputDirectory)){
            mkdirSync(outputDirectory)
        }
        const outputPath = outputDirectory + 'ExpToPaper-' + basename(backupPath).replace('.proto.gz', '.json')
        writeFile(outputPath, JSON.stringify(paperbackBackup), (err) => {
            if (err) throw err;
            console.log('Backup saved!');
        })
    })