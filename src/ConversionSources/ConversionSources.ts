import { GuyaConversionSource } from "./GuyaConversionSource";
import { MangaDexConversionSource } from "./MangadexConversionSource";
import { MangaLifeConversionSource } from "./MangaLifeConversionSource";
import { ManganeloConversionSource } from "./ManganeloConversionSource";
import { MangaseeConversionSource } from "./MangaseeConversionSource";

/**
 * A function that return a list of all available source converters. 
 * It is used by backup converters to be able to access all existing source converters
 */
export function getConversionSourcesList() {
    /*
        This function should be updated when a new source converter is added
    */
    return [
        new GuyaConversionSource(),
        new MangaDexConversionSource(),
        new MangaLifeConversionSource(),
        new ManganeloConversionSource(),
        new MangaseeConversionSource(),
    ]
}



/**
 * @returns the list of existing converters' names. 
 * Used to display available converters
 */
export function getConversionSourcesNames() {
    return getConversionSourcesList().map((converter) => converter.tachiyomiSourceName)
}