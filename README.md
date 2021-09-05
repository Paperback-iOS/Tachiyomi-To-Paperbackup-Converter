# Tachiyomi and Paperback Backup Converter

# Features

* Tachiyomi to Paperback backup conversion
    Convert the library, read chapter markers and categories

* Paperback to Tachiyomi backup conversion
    Convert the library and read chapter markers
    NOTE: Library tabs are currently not converted, see [Limitations](#limitations)
    NOTE: Sources used may not be in the correct language, requiring a migration, see [Limitations](#limitations)

> Supported sources can be found in `src/ConversionSources`

* Tachiyomi backup manager
    Allow to inflate, decode, export, encode and gzip Tachiyomi backups.

* Light representation
    Export Tachiyomi and Paperback backups into a small representation, easily usable to display their library content.

# Where can I use this tool
On Paperback and Tachiyomi websites
Using this repository [scripts and ressources](#ressources)

---

# How to contribute

1. Fork and clone this repository

1. Run:
```bash
npm install
```

You will then be able to modify this tool.

> To add support for a new source, simply create a new class, inheriting from `AbstractConversionSource`.
> Update `ConversionSources.ts` with the new source converter to make it accessible for the backup converters.

To test your modifications, you can use this repository's [scripts and ressources](#ressources)

---

# Integrate this tool somewhere

## Use the browserified version

Generate the js bundle:
```bash
npm run bundle
```

Add the bundled file `dist/bundle/backupConverter.js` to the website assets.

Then require it from your script:
```vue
const converter = require('./backupConverter.js')
```

## Convert a backup
> The converters only support Paperback `backupSchemaVersion 3` (app version 0.6 and newer) and Tachiyomi `.proto.gz` backup formats.

**Tachiyomi to Paperback**
```typescript
// The original backup needs to be a Buffer
const protoGzFile: Buffer
```
> With node:
> ```typescript
> const protoGzFile = readFileSync(path)
> ```
> On a browser, if `file` is a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object:
> ```js
> const protoGzFile = await file.arrayBuffer()
> ```

```typescript
// Unpack the .proto.gz file and export it as a `TachiyomiObjectModel.Backup` object
const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiBackup = tachiyomiBackupManager.exportBackup()

// Convert the Tachiyomi backup into a Paperback backup
const convertionManager = new TachiToPaperBackupConverter(tachiyomiBackup)

const paperbackBackup = await convertionManager.conversion()
// paperbackBackup is then a `PaperbackBackup.Backup` object
```

---

# Objects description and usage

## Ressources
Scripts, examples and backups can be found in the [ressource](ressource/) folder.

You can run them using `ts-node`
```bash
npx ts-node ressources/convertPaperToTachiBackup.ts 
```

## Backup Managers
Backup managers define methods to manage backup files, especially loading from and exporting to .proto.gz Tachiyomi backup format.
They also contains methods to edit the backup which are used by Backup Converters.

## Backup Converters
Backup Converters are responsible for managing the backup conversion process.
They need to be instantiated with the backup that will be converted.

* `PaperToTachiBackupConverter` accept a `PaperbackBackup.Backup` object:

```typescript
const conversionManager = new TachiToPaperBackupConverter(paperbackBackup)
```

* `TachiToPaperBackupConverter` accept a `TachiyomiObjectModel.Backup` object:

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

## `module.ts`
Entry point of the repository. Export objects necessary for backup conversion.

---

# Limitations

Paperback to Tachiyomi converter does not include categories to not raise the error "Expected wire type 0, found 2" when the backup is restored in the app. 
See `src/BackupConverters/PaperToTachiBackupConverter.ts` `parseBackupManga()` definition

If Tachiyomi use a different source for each language, Paperback only have a multi-languages source. Thus when converting from Paperback to Tachiyomi, the source used may be the English one, requiring a migration to use the correct one.

Tachiyomi use numeric sources ids like 2499283573021220255. To prevent an overflow, these ids should be used as `Long`.
See `src/BackupConverters/PaperToTachiBackupConverter.ts` `parseBackupManga()` definition