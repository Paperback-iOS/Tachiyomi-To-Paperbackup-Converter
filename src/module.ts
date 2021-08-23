/**
 * Export backup converters, backup managers and the source converters list.
 * This is the file that should be browerified. 
 */

export * from './BackupManagers/TachiyomiBackupManager'
export * from './BackupManagers/PaperbackBackupManager'
export * from './BackupConverters/TachiToPaperBackupConverter'
export * from './BackupConverters/PaperToTachiBackupConverter'

export { getConversionSourcesNames } from './ConversionSources/ConversionSources'