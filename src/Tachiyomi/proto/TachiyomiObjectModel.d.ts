import * as $protobuf from "protobufjs";
/** Namespace TachiyomiObjectModel. */
export namespace TachiyomiObjectModel {

    /** Properties of a BackupManga. */
    interface IBackupManga {

        /** BackupManga source */
        source?: (number|Long|null);

        /** BackupManga url */
        url?: (string|null);

        /** BackupManga title */
        title?: (string|null);

        /** BackupManga artist */
        artist?: (string|null);

        /** BackupManga author */
        author?: (string|null);

        /** BackupManga description */
        description?: (string|null);

        /** BackupManga genre */
        genre?: (string[]|null);

        /** BackupManga status */
        status?: (number|Long|null);

        /** BackupManga thumbnailUrl */
        thumbnailUrl?: (string|null);

        /** BackupManga dateAdded */
        dateAdded?: (number|Long|null);

        /** BackupManga viewer */
        viewer?: (number|null);

        /** BackupManga chapters */
        chapters?: (TachiyomiObjectModel.IBackupChapter[]|null);

        /** BackupManga categories */
        categories?: (number[]|null);

        /** BackupManga tracking */
        tracking?: (TachiyomiObjectModel.IBackupTracking[]|null);

        /** BackupManga favorite */
        favorite?: (boolean|null);

        /** BackupManga chapterFlags */
        chapterFlags?: (number|null);

        /** BackupManga history */
        history?: (TachiyomiObjectModel.IBackupHistory[]|null);
    }

    /** Represents a BackupManga. */
    class BackupManga implements IBackupManga {

        /**
         * Constructs a new BackupManga.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupManga);

        /** BackupManga source. */
        public source: (number|Long);

        /** BackupManga url. */
        public url: string;

        /** BackupManga title. */
        public title: string;

        /** BackupManga artist. */
        public artist: string;

        /** BackupManga author. */
        public author: string;

        /** BackupManga description. */
        public description: string;

        /** BackupManga genre. */
        public genre: string[];

        /** BackupManga status. */
        public status: (number|Long);

        /** BackupManga thumbnailUrl. */
        public thumbnailUrl: string;

        /** BackupManga dateAdded. */
        public dateAdded: (number|Long);

        /** BackupManga viewer. */
        public viewer: number;

        /** BackupManga chapters. */
        public chapters: TachiyomiObjectModel.IBackupChapter[];

        /** BackupManga categories. */
        public categories: number[];

        /** BackupManga tracking. */
        public tracking: TachiyomiObjectModel.IBackupTracking[];

        /** BackupManga favorite. */
        public favorite: boolean;

        /** BackupManga chapterFlags. */
        public chapterFlags: number;

        /** BackupManga history. */
        public history: TachiyomiObjectModel.IBackupHistory[];

        /**
         * Creates a new BackupManga instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupManga instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupManga): TachiyomiObjectModel.BackupManga;

        /**
         * Encodes the specified BackupManga message. Does not implicitly {@link TachiyomiObjectModel.BackupManga.verify|verify} messages.
         * @param message BackupManga message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupManga, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupManga message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupManga.verify|verify} messages.
         * @param message BackupManga message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupManga, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupManga message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupManga;

        /**
         * Decodes a BackupManga message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupManga;

        /**
         * Verifies a BackupManga message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupManga message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupManga
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupManga;

        /**
         * Creates a plain object from a BackupManga message. Also converts values to other types if specified.
         * @param message BackupManga
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupManga, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupManga to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupChapter. */
    interface IBackupChapter {

        /** BackupChapter url */
        url?: (string|null);

        /** BackupChapter name */
        name?: (string|null);

        /** BackupChapter scanlator */
        scanlator?: (string|null);

        /** BackupChapter read */
        read?: (boolean|null);

        /** BackupChapter bookmark */
        bookmark?: (boolean|null);

        /** BackupChapter lastPageRead */
        lastPageRead?: (number|null);

        /** BackupChapter dateFetch */
        dateFetch?: (number|Long|null);

        /** BackupChapter dateUplaod */
        dateUplaod?: (number|Long|null);

        /** BackupChapter chapterNumber */
        chapterNumber?: (number|null);

        /** BackupChapter sourceOrder */
        sourceOrder?: (number|null);
    }

    /** Represents a BackupChapter. */
    class BackupChapter implements IBackupChapter {

        /**
         * Constructs a new BackupChapter.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupChapter);

        /** BackupChapter url. */
        public url: string;

        /** BackupChapter name. */
        public name: string;

        /** BackupChapter scanlator. */
        public scanlator: string;

        /** BackupChapter read. */
        public read: boolean;

        /** BackupChapter bookmark. */
        public bookmark: boolean;

        /** BackupChapter lastPageRead. */
        public lastPageRead: number;

        /** BackupChapter dateFetch. */
        public dateFetch: (number|Long);

        /** BackupChapter dateUplaod. */
        public dateUplaod: (number|Long);

        /** BackupChapter chapterNumber. */
        public chapterNumber: number;

        /** BackupChapter sourceOrder. */
        public sourceOrder: number;

        /**
         * Creates a new BackupChapter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupChapter instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupChapter): TachiyomiObjectModel.BackupChapter;

        /**
         * Encodes the specified BackupChapter message. Does not implicitly {@link TachiyomiObjectModel.BackupChapter.verify|verify} messages.
         * @param message BackupChapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupChapter message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupChapter.verify|verify} messages.
         * @param message BackupChapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupChapter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupChapter;

        /**
         * Decodes a BackupChapter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupChapter;

        /**
         * Verifies a BackupChapter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupChapter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupChapter
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupChapter;

        /**
         * Creates a plain object from a BackupChapter message. Also converts values to other types if specified.
         * @param message BackupChapter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupChapter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupChapter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupTracking. */
    interface IBackupTracking {

        /** BackupTracking syncId */
        syncId?: (number|null);

        /** BackupTracking libraryId */
        libraryId?: (number|Long|null);

        /** BackupTracking mediaId */
        mediaId?: (number|null);

        /** BackupTracking trackingUrl */
        trackingUrl?: (string|null);

        /** BackupTracking title */
        title?: (string|null);

        /** BackupTracking lastChapterRead */
        lastChapterRead?: (number|null);

        /** BackupTracking totalChapters */
        totalChapters?: (number|null);

        /** BackupTracking score */
        score?: (number|null);

        /** BackupTracking status */
        status?: (number|null);

        /** BackupTracking startedReadingDate */
        startedReadingDate?: (number|Long|null);

        /** BackupTracking finishedReadingDate */
        finishedReadingDate?: (number|Long|null);
    }

    /** Represents a BackupTracking. */
    class BackupTracking implements IBackupTracking {

        /**
         * Constructs a new BackupTracking.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupTracking);

        /** BackupTracking syncId. */
        public syncId: number;

        /** BackupTracking libraryId. */
        public libraryId: (number|Long);

        /** BackupTracking mediaId. */
        public mediaId: number;

        /** BackupTracking trackingUrl. */
        public trackingUrl: string;

        /** BackupTracking title. */
        public title: string;

        /** BackupTracking lastChapterRead. */
        public lastChapterRead: number;

        /** BackupTracking totalChapters. */
        public totalChapters: number;

        /** BackupTracking score. */
        public score: number;

        /** BackupTracking status. */
        public status: number;

        /** BackupTracking startedReadingDate. */
        public startedReadingDate: (number|Long);

        /** BackupTracking finishedReadingDate. */
        public finishedReadingDate: (number|Long);

        /**
         * Creates a new BackupTracking instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupTracking instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupTracking): TachiyomiObjectModel.BackupTracking;

        /**
         * Encodes the specified BackupTracking message. Does not implicitly {@link TachiyomiObjectModel.BackupTracking.verify|verify} messages.
         * @param message BackupTracking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupTracking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupTracking message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupTracking.verify|verify} messages.
         * @param message BackupTracking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupTracking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupTracking message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupTracking;

        /**
         * Decodes a BackupTracking message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupTracking;

        /**
         * Verifies a BackupTracking message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupTracking message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupTracking
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupTracking;

        /**
         * Creates a plain object from a BackupTracking message. Also converts values to other types if specified.
         * @param message BackupTracking
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupTracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupTracking to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupHistory. */
    interface IBackupHistory {

        /** BackupHistory url */
        url?: (string|null);

        /** BackupHistory lastRead */
        lastRead?: (number|Long|null);
    }

    /** Represents a BackupHistory. */
    class BackupHistory implements IBackupHistory {

        /**
         * Constructs a new BackupHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupHistory);

        /** BackupHistory url. */
        public url: string;

        /** BackupHistory lastRead. */
        public lastRead: (number|Long);

        /**
         * Creates a new BackupHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupHistory instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupHistory): TachiyomiObjectModel.BackupHistory;

        /**
         * Encodes the specified BackupHistory message. Does not implicitly {@link TachiyomiObjectModel.BackupHistory.verify|verify} messages.
         * @param message BackupHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupHistory message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupHistory.verify|verify} messages.
         * @param message BackupHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupHistory;

        /**
         * Decodes a BackupHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupHistory;

        /**
         * Verifies a BackupHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupHistory
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupHistory;

        /**
         * Creates a plain object from a BackupHistory message. Also converts values to other types if specified.
         * @param message BackupHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupCategory. */
    interface IBackupCategory {

        /** BackupCategory name */
        name?: (string|null);

        /** BackupCategory order */
        order?: (number|null);

        /** BackupCategory flags */
        flags?: (number|null);
    }

    /** Represents a BackupCategory. */
    class BackupCategory implements IBackupCategory {

        /**
         * Constructs a new BackupCategory.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupCategory);

        /** BackupCategory name. */
        public name: string;

        /** BackupCategory order. */
        public order: number;

        /** BackupCategory flags. */
        public flags: number;

        /**
         * Creates a new BackupCategory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupCategory instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupCategory): TachiyomiObjectModel.BackupCategory;

        /**
         * Encodes the specified BackupCategory message. Does not implicitly {@link TachiyomiObjectModel.BackupCategory.verify|verify} messages.
         * @param message BackupCategory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupCategory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupCategory message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupCategory.verify|verify} messages.
         * @param message BackupCategory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupCategory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupCategory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupCategory;

        /**
         * Decodes a BackupCategory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupCategory;

        /**
         * Verifies a BackupCategory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupCategory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupCategory
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupCategory;

        /**
         * Creates a plain object from a BackupCategory message. Also converts values to other types if specified.
         * @param message BackupCategory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupCategory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupSource. */
    interface IBackupSource {

        /** BackupSource name */
        name?: (string|null);

        /** BackupSource sourceId */
        sourceId?: (number|Long|null);
    }

    /** Represents a BackupSource. */
    class BackupSource implements IBackupSource {

        /**
         * Constructs a new BackupSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackupSource);

        /** BackupSource name. */
        public name: string;

        /** BackupSource sourceId. */
        public sourceId: (number|Long);

        /**
         * Creates a new BackupSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupSource instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackupSource): TachiyomiObjectModel.BackupSource;

        /**
         * Encodes the specified BackupSource message. Does not implicitly {@link TachiyomiObjectModel.BackupSource.verify|verify} messages.
         * @param message BackupSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupSource message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupSource.verify|verify} messages.
         * @param message BackupSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.BackupSource;

        /**
         * Decodes a BackupSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.BackupSource;

        /**
         * Verifies a BackupSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupSource
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.BackupSource;

        /**
         * Creates a plain object from a BackupSource message. Also converts values to other types if specified.
         * @param message BackupSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.BackupSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Backup. */
    interface IBackup {

        /** Backup backupManga */
        backupManga?: (TachiyomiObjectModel.IBackupManga[]|null);

        /** Backup backupCategories */
        backupCategories?: (TachiyomiObjectModel.IBackupCategory[]|null);

        /** Backup backupSources */
        backupSources?: (TachiyomiObjectModel.IBackupSource[]|null);
    }

    /** Represents a Backup. */
    class Backup implements IBackup {

        /**
         * Constructs a new Backup.
         * @param [properties] Properties to set
         */
        constructor(properties?: TachiyomiObjectModel.IBackup);

        /** Backup backupManga. */
        public backupManga: TachiyomiObjectModel.IBackupManga[];

        /** Backup backupCategories. */
        public backupCategories: TachiyomiObjectModel.IBackupCategory[];

        /** Backup backupSources. */
        public backupSources: TachiyomiObjectModel.IBackupSource[];

        /**
         * Creates a new Backup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Backup instance
         */
        public static create(properties?: TachiyomiObjectModel.IBackup): TachiyomiObjectModel.Backup;

        /**
         * Encodes the specified Backup message. Does not implicitly {@link TachiyomiObjectModel.Backup.verify|verify} messages.
         * @param message Backup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TachiyomiObjectModel.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Backup message, length delimited. Does not implicitly {@link TachiyomiObjectModel.Backup.verify|verify} messages.
         * @param message Backup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TachiyomiObjectModel.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Backup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TachiyomiObjectModel.Backup;

        /**
         * Decodes a Backup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TachiyomiObjectModel.Backup;

        /**
         * Verifies a Backup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Backup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Backup
         */
        public static fromObject(object: { [k: string]: any }): TachiyomiObjectModel.Backup;

        /**
         * Creates a plain object from a Backup message. Also converts values to other types if specified.
         * @param message Backup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TachiyomiObjectModel.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Backup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
