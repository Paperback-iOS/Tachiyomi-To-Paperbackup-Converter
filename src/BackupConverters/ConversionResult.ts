/**
 * The object returned after a backup conversion.
 * Contain:
 *  - The converted backup object: {@link conversionResult.backupObject backupObject}
 *  - A list of titles that could not be converted: {@link conversionResult.unconverted unconverted}
 */
interface conversionResult<T> {
	backupObject: T,
	unconverted: {mangaTitle: string, mangaId: string, sourceId: string}[],
	type: 'Paperback' | 'Tachiyomi'
}