# Tachiyomi and Paperback Backup Converter

## How to use it
The converters only support Paperback `backupSchemaVersion` 3 (app version 0.6 and newer) and Tachiyomi `.proto.gz` backup formats.

```typescript
// You need to have the original backup as a Buffer
const protoGzFile: Buffer
```
> With node, you can use:
> ```typescript
> const protoGzFile = readFileSync(path)
> ```
> On a browser, if `file` is a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object:
> ```js
> const protoGzFile = await file.arrayBuffer()
> ```

```typescript
// Unpack the .proto.gz file and export it to a `TachiyomiObjectModel.Backup` object
const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiBackup = tachiyomiBackupManager.exportBackup()

// Convert the Tachiyomi backup into a Paperback backup
const convertionManager = new TachiToPaperBackupConverter(tachiyomiBackup)

convertionManager.conversion()
    .then((paperbackBackup) => {
        // Use the backup
    })
```

## Ressources
Scripts, examples and backups can be found in the `ressource/` folder

# Objects description and usage

## Backup Managers
Backup managers define methods to manage backup files, especially loading from and exporting to .proto.gz Tachiyomi backup format.
They also contains methods to edit the backup which are used by Backup Converters.

## Backup Converters
Backup Converters are responsible for managing the backup conversion process.
They need to be instantiated with the backup that will be converted.

* `PaperToTachiBackupConverter` accept a `PaperbackBackup.Backup` object

```typescript
const conversionManager = new TachiToPaperBackupConverter(paperbackBackup)
```

* `TachiToPaperBackupConverter` accept a `TachiyomiObjectModel.Backup` object

```
const conversionManager = new TachiToPaperBackupConverter(tachiyomiBackup)
```

Calling `.conversion()` return a promise that resolves into the converted backup (a `PaperbackBackup.Backup` or a `TachiyomiObjectModel.Backup` object)

```typescript
convertionManager.conversion()
    .then((backup) => {
        // Use the backup object
    })
```

## Conversion Sources
Classes responsible for managing the conversion between Tachiyomi and Paperback extensions.
They have to convert:
 - source ids
 - manga ids
 - chapter ids

> To add support for a new source, simply create a new class, inheriting from `AbstractConversionSource`.
> Update `ConversionSources.ts` with the new source converter to make it accessible for the backup converters.

## Object type definitions
Paperback and Tachiyomi types are defined in their respectives folders.