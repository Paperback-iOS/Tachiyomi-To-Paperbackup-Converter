/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TachiyomiObjectModel = (function() {

    /**
     * Namespace TachiyomiObjectModel.
     * @exports TachiyomiObjectModel
     * @namespace
     */
    var TachiyomiObjectModel = {};

    TachiyomiObjectModel.BackupManga = (function() {

        /**
         * Properties of a BackupManga.
         * @memberof TachiyomiObjectModel
         * @interface IBackupManga
         * @property {number|Long|null} [source] BackupManga source
         * @property {string|null} [url] BackupManga url
         * @property {string|null} [title] BackupManga title
         * @property {string|null} [artist] BackupManga artist
         * @property {string|null} [author] BackupManga author
         * @property {string|null} [description] BackupManga description
         * @property {Array.<string>|null} [genre] BackupManga genre
         * @property {number|Long|null} [status] BackupManga status
         * @property {string|null} [thumbnailUrl] BackupManga thumbnailUrl
         * @property {number|Long|null} [dateAdded] BackupManga dateAdded
         * @property {number|null} [viewer] BackupManga viewer
         * @property {Array.<TachiyomiObjectModel.IBackupChapter>|null} [chapters] BackupManga chapters
         * @property {Array.<number>|null} [categories] BackupManga categories
         * @property {Array.<TachiyomiObjectModel.IBackupTracking>|null} [tracking] BackupManga tracking
         * @property {boolean|null} [favorite] BackupManga favorite
         * @property {number|null} [chapterFlags] BackupManga chapterFlags
         * @property {Array.<TachiyomiObjectModel.IBackupHistory>|null} [history] BackupManga history
         */

        /**
         * Constructs a new BackupManga.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupManga.
         * @implements IBackupManga
         * @constructor
         * @param {TachiyomiObjectModel.IBackupManga=} [properties] Properties to set
         */
        function BackupManga(properties) {
            this.genre = [];
            this.chapters = [];
            this.categories = [];
            this.tracking = [];
            this.history = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupManga source.
         * @member {number|Long} source
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.source = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga url.
         * @member {string} url
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.url = "";

        /**
         * BackupManga title.
         * @member {string} title
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.title = "";

        /**
         * BackupManga artist.
         * @member {string|null|undefined} artist
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.artist = null;

        /**
         * BackupManga author.
         * @member {string|null|undefined} author
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.author = null;

        /**
         * BackupManga description.
         * @member {string|null|undefined} description
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.description = null;

        /**
         * BackupManga genre.
         * @member {Array.<string>} genre
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.genre = $util.emptyArray;

        /**
         * BackupManga status.
         * @member {number|Long} status
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga thumbnailUrl.
         * @member {string|null|undefined} thumbnailUrl
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.thumbnailUrl = null;

        /**
         * BackupManga dateAdded.
         * @member {number|Long} dateAdded
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.dateAdded = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga viewer.
         * @member {number} viewer
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.viewer = 0;

        /**
         * BackupManga chapters.
         * @member {Array.<TachiyomiObjectModel.IBackupChapter>} chapters
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.chapters = $util.emptyArray;

        /**
         * BackupManga categories.
         * @member {Array.<number>} categories
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.categories = $util.emptyArray;

        /**
         * BackupManga tracking.
         * @member {Array.<TachiyomiObjectModel.IBackupTracking>} tracking
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.tracking = $util.emptyArray;

        /**
         * BackupManga favorite.
         * @member {boolean} favorite
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.favorite = false;

        /**
         * BackupManga chapterFlags.
         * @member {number} chapterFlags
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.chapterFlags = 0;

        /**
         * BackupManga history.
         * @member {Array.<TachiyomiObjectModel.IBackupHistory>} history
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.history = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BackupManga _artist.
         * @member {"artist"|undefined} _artist
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        Object.defineProperty(BackupManga.prototype, "_artist", {
            get: $util.oneOfGetter($oneOfFields = ["artist"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BackupManga _author.
         * @member {"author"|undefined} _author
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        Object.defineProperty(BackupManga.prototype, "_author", {
            get: $util.oneOfGetter($oneOfFields = ["author"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BackupManga _description.
         * @member {"description"|undefined} _description
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        Object.defineProperty(BackupManga.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BackupManga _thumbnailUrl.
         * @member {"thumbnailUrl"|undefined} _thumbnailUrl
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         */
        Object.defineProperty(BackupManga.prototype, "_thumbnailUrl", {
            get: $util.oneOfGetter($oneOfFields = ["thumbnailUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BackupManga instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {TachiyomiObjectModel.IBackupManga=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupManga} BackupManga instance
         */
        BackupManga.create = function create(properties) {
            return new BackupManga(properties);
        };

        /**
         * Encodes the specified BackupManga message. Does not implicitly {@link TachiyomiObjectModel.BackupManga.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {TachiyomiObjectModel.IBackupManga} message BackupManga message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupManga.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.source);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.artist != null && Object.hasOwnProperty.call(message, "artist"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.artist);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.author);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
            if (message.genre != null && message.genre.length)
                for (var i = 0; i < message.genre.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.genre[i]);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.status);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.thumbnailUrl);
            if (message.dateAdded != null && Object.hasOwnProperty.call(message, "dateAdded"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.dateAdded);
            if (message.viewer != null && Object.hasOwnProperty.call(message, "viewer"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.viewer);
            if (message.chapters != null && message.chapters.length)
                for (var i = 0; i < message.chapters.length; ++i)
                    $root.TachiyomiObjectModel.BackupChapter.encode(message.chapters[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.categories != null && message.categories.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.categories.length; ++i)
                    writer.int32(message.categories[i]);
                writer.ldelim();
            }
            if (message.tracking != null && message.tracking.length)
                for (var i = 0; i < message.tracking.length; ++i)
                    $root.TachiyomiObjectModel.BackupTracking.encode(message.tracking[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.favorite != null && Object.hasOwnProperty.call(message, "favorite"))
                writer.uint32(/* id 100, wireType 0 =*/800).bool(message.favorite);
            if (message.chapterFlags != null && Object.hasOwnProperty.call(message, "chapterFlags"))
                writer.uint32(/* id 101, wireType 0 =*/808).int32(message.chapterFlags);
            if (message.history != null && message.history.length)
                for (var i = 0; i < message.history.length; ++i)
                    $root.TachiyomiObjectModel.BackupHistory.encode(message.history[i], writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BackupManga message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupManga.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {TachiyomiObjectModel.IBackupManga} message BackupManga message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupManga.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupManga message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupManga} BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupManga.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupManga();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.source = reader.int64();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.artist = reader.string();
                    break;
                case 5:
                    message.author = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    if (!(message.genre && message.genre.length))
                        message.genre = [];
                    message.genre.push(reader.string());
                    break;
                case 8:
                    message.status = reader.int64();
                    break;
                case 9:
                    message.thumbnailUrl = reader.string();
                    break;
                case 13:
                    message.dateAdded = reader.int64();
                    break;
                case 14:
                    message.viewer = reader.int32();
                    break;
                case 16:
                    if (!(message.chapters && message.chapters.length))
                        message.chapters = [];
                    message.chapters.push($root.TachiyomiObjectModel.BackupChapter.decode(reader, reader.uint32()));
                    break;
                case 17:
                    if (!(message.categories && message.categories.length))
                        message.categories = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.categories.push(reader.int32());
                    } else
                        message.categories.push(reader.int32());
                    break;
                case 18:
                    if (!(message.tracking && message.tracking.length))
                        message.tracking = [];
                    message.tracking.push($root.TachiyomiObjectModel.BackupTracking.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.favorite = reader.bool();
                    break;
                case 101:
                    message.chapterFlags = reader.int32();
                    break;
                case 102:
                    if (!(message.history && message.history.length))
                        message.history = [];
                    message.history.push($root.TachiyomiObjectModel.BackupHistory.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupManga message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupManga} BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupManga.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupManga message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupManga.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isInteger(message.source) && !(message.source && $util.isInteger(message.source.low) && $util.isInteger(message.source.high)))
                    return "source: integer|Long expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.artist != null && message.hasOwnProperty("artist")) {
                properties._artist = 1;
                if (!$util.isString(message.artist))
                    return "artist: string expected";
            }
            if (message.author != null && message.hasOwnProperty("author")) {
                properties._author = 1;
                if (!$util.isString(message.author))
                    return "author: string expected";
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                properties._description = 1;
                if (!$util.isString(message.description))
                    return "description: string expected";
            }
            if (message.genre != null && message.hasOwnProperty("genre")) {
                if (!Array.isArray(message.genre))
                    return "genre: array expected";
                for (var i = 0; i < message.genre.length; ++i)
                    if (!$util.isString(message.genre[i]))
                        return "genre: string[] expected";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                properties._thumbnailUrl = 1;
                if (!$util.isString(message.thumbnailUrl))
                    return "thumbnailUrl: string expected";
            }
            if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
                if (!$util.isInteger(message.dateAdded) && !(message.dateAdded && $util.isInteger(message.dateAdded.low) && $util.isInteger(message.dateAdded.high)))
                    return "dateAdded: integer|Long expected";
            if (message.viewer != null && message.hasOwnProperty("viewer"))
                if (!$util.isInteger(message.viewer))
                    return "viewer: integer expected";
            if (message.chapters != null && message.hasOwnProperty("chapters")) {
                if (!Array.isArray(message.chapters))
                    return "chapters: array expected";
                for (var i = 0; i < message.chapters.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupChapter.verify(message.chapters[i]);
                    if (error)
                        return "chapters." + error;
                }
            }
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i)
                    if (!$util.isInteger(message.categories[i]))
                        return "categories: integer[] expected";
            }
            if (message.tracking != null && message.hasOwnProperty("tracking")) {
                if (!Array.isArray(message.tracking))
                    return "tracking: array expected";
                for (var i = 0; i < message.tracking.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupTracking.verify(message.tracking[i]);
                    if (error)
                        return "tracking." + error;
                }
            }
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                if (typeof message.favorite !== "boolean")
                    return "favorite: boolean expected";
            if (message.chapterFlags != null && message.hasOwnProperty("chapterFlags"))
                if (!$util.isInteger(message.chapterFlags))
                    return "chapterFlags: integer expected";
            if (message.history != null && message.hasOwnProperty("history")) {
                if (!Array.isArray(message.history))
                    return "history: array expected";
                for (var i = 0; i < message.history.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupHistory.verify(message.history[i]);
                    if (error)
                        return "history." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BackupManga message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupManga} BackupManga
         */
        BackupManga.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupManga)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupManga();
            if (object.source != null)
                if ($util.Long)
                    (message.source = $util.Long.fromValue(object.source)).unsigned = false;
                else if (typeof object.source === "string")
                    message.source = parseInt(object.source, 10);
                else if (typeof object.source === "number")
                    message.source = object.source;
                else if (typeof object.source === "object")
                    message.source = new $util.LongBits(object.source.low >>> 0, object.source.high >>> 0).toNumber();
            if (object.url != null)
                message.url = String(object.url);
            if (object.title != null)
                message.title = String(object.title);
            if (object.artist != null)
                message.artist = String(object.artist);
            if (object.author != null)
                message.author = String(object.author);
            if (object.description != null)
                message.description = String(object.description);
            if (object.genre) {
                if (!Array.isArray(object.genre))
                    throw TypeError(".TachiyomiObjectModel.BackupManga.genre: array expected");
                message.genre = [];
                for (var i = 0; i < object.genre.length; ++i)
                    message.genre[i] = String(object.genre[i]);
            }
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            if (object.thumbnailUrl != null)
                message.thumbnailUrl = String(object.thumbnailUrl);
            if (object.dateAdded != null)
                if ($util.Long)
                    (message.dateAdded = $util.Long.fromValue(object.dateAdded)).unsigned = false;
                else if (typeof object.dateAdded === "string")
                    message.dateAdded = parseInt(object.dateAdded, 10);
                else if (typeof object.dateAdded === "number")
                    message.dateAdded = object.dateAdded;
                else if (typeof object.dateAdded === "object")
                    message.dateAdded = new $util.LongBits(object.dateAdded.low >>> 0, object.dateAdded.high >>> 0).toNumber();
            if (object.viewer != null)
                message.viewer = object.viewer | 0;
            if (object.chapters) {
                if (!Array.isArray(object.chapters))
                    throw TypeError(".TachiyomiObjectModel.BackupManga.chapters: array expected");
                message.chapters = [];
                for (var i = 0; i < object.chapters.length; ++i) {
                    if (typeof object.chapters[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.BackupManga.chapters: object expected");
                    message.chapters[i] = $root.TachiyomiObjectModel.BackupChapter.fromObject(object.chapters[i]);
                }
            }
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".TachiyomiObjectModel.BackupManga.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i)
                    message.categories[i] = object.categories[i] | 0;
            }
            if (object.tracking) {
                if (!Array.isArray(object.tracking))
                    throw TypeError(".TachiyomiObjectModel.BackupManga.tracking: array expected");
                message.tracking = [];
                for (var i = 0; i < object.tracking.length; ++i) {
                    if (typeof object.tracking[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.BackupManga.tracking: object expected");
                    message.tracking[i] = $root.TachiyomiObjectModel.BackupTracking.fromObject(object.tracking[i]);
                }
            }
            if (object.favorite != null)
                message.favorite = Boolean(object.favorite);
            if (object.chapterFlags != null)
                message.chapterFlags = object.chapterFlags | 0;
            if (object.history) {
                if (!Array.isArray(object.history))
                    throw TypeError(".TachiyomiObjectModel.BackupManga.history: array expected");
                message.history = [];
                for (var i = 0; i < object.history.length; ++i) {
                    if (typeof object.history[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.BackupManga.history: object expected");
                    message.history[i] = $root.TachiyomiObjectModel.BackupHistory.fromObject(object.history[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BackupManga message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupManga
         * @static
         * @param {TachiyomiObjectModel.BackupManga} message BackupManga
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupManga.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.genre = [];
                object.chapters = [];
                object.categories = [];
                object.tracking = [];
                object.history = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.source = options.longs === String ? "0" : 0;
                object.url = "";
                object.title = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateAdded = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateAdded = options.longs === String ? "0" : 0;
                object.viewer = 0;
                object.favorite = false;
                object.chapterFlags = 0;
            }
            if (message.source != null && message.hasOwnProperty("source"))
                if (typeof message.source === "number")
                    object.source = options.longs === String ? String(message.source) : message.source;
                else
                    object.source = options.longs === String ? $util.Long.prototype.toString.call(message.source) : options.longs === Number ? new $util.LongBits(message.source.low >>> 0, message.source.high >>> 0).toNumber() : message.source;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.artist != null && message.hasOwnProperty("artist")) {
                object.artist = message.artist;
                if (options.oneofs)
                    object._artist = "artist";
            }
            if (message.author != null && message.hasOwnProperty("author")) {
                object.author = message.author;
                if (options.oneofs)
                    object._author = "author";
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                object.description = message.description;
                if (options.oneofs)
                    object._description = "description";
            }
            if (message.genre && message.genre.length) {
                object.genre = [];
                for (var j = 0; j < message.genre.length; ++j)
                    object.genre[j] = message.genre[j];
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                object.thumbnailUrl = message.thumbnailUrl;
                if (options.oneofs)
                    object._thumbnailUrl = "thumbnailUrl";
            }
            if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
                if (typeof message.dateAdded === "number")
                    object.dateAdded = options.longs === String ? String(message.dateAdded) : message.dateAdded;
                else
                    object.dateAdded = options.longs === String ? $util.Long.prototype.toString.call(message.dateAdded) : options.longs === Number ? new $util.LongBits(message.dateAdded.low >>> 0, message.dateAdded.high >>> 0).toNumber() : message.dateAdded;
            if (message.viewer != null && message.hasOwnProperty("viewer"))
                object.viewer = message.viewer;
            if (message.chapters && message.chapters.length) {
                object.chapters = [];
                for (var j = 0; j < message.chapters.length; ++j)
                    object.chapters[j] = $root.TachiyomiObjectModel.BackupChapter.toObject(message.chapters[j], options);
            }
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = message.categories[j];
            }
            if (message.tracking && message.tracking.length) {
                object.tracking = [];
                for (var j = 0; j < message.tracking.length; ++j)
                    object.tracking[j] = $root.TachiyomiObjectModel.BackupTracking.toObject(message.tracking[j], options);
            }
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                object.favorite = message.favorite;
            if (message.chapterFlags != null && message.hasOwnProperty("chapterFlags"))
                object.chapterFlags = message.chapterFlags;
            if (message.history && message.history.length) {
                object.history = [];
                for (var j = 0; j < message.history.length; ++j)
                    object.history[j] = $root.TachiyomiObjectModel.BackupHistory.toObject(message.history[j], options);
            }
            return object;
        };

        /**
         * Converts this BackupManga to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupManga
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupManga.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupManga;
    })();

    TachiyomiObjectModel.BackupChapter = (function() {

        /**
         * Properties of a BackupChapter.
         * @memberof TachiyomiObjectModel
         * @interface IBackupChapter
         * @property {string|null} [url] BackupChapter url
         * @property {string|null} [name] BackupChapter name
         * @property {string|null} [scanlator] BackupChapter scanlator
         * @property {boolean|null} [read] BackupChapter read
         * @property {boolean|null} [bookmark] BackupChapter bookmark
         * @property {number|null} [lastPageRead] BackupChapter lastPageRead
         * @property {number|Long|null} [dateFetch] BackupChapter dateFetch
         * @property {number|Long|null} [dateUplaod] BackupChapter dateUplaod
         * @property {number|null} [chapterNumber] BackupChapter chapterNumber
         * @property {number|null} [sourceOrder] BackupChapter sourceOrder
         */

        /**
         * Constructs a new BackupChapter.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupChapter.
         * @implements IBackupChapter
         * @constructor
         * @param {TachiyomiObjectModel.IBackupChapter=} [properties] Properties to set
         */
        function BackupChapter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupChapter url.
         * @member {string} url
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.url = "";

        /**
         * BackupChapter name.
         * @member {string} name
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.name = "";

        /**
         * BackupChapter scanlator.
         * @member {string|null|undefined} scanlator
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.scanlator = null;

        /**
         * BackupChapter read.
         * @member {boolean} read
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.read = false;

        /**
         * BackupChapter bookmark.
         * @member {boolean} bookmark
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.bookmark = false;

        /**
         * BackupChapter lastPageRead.
         * @member {number} lastPageRead
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.lastPageRead = 0;

        /**
         * BackupChapter dateFetch.
         * @member {number|Long} dateFetch
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.dateFetch = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter dateUplaod.
         * @member {number|Long} dateUplaod
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.dateUplaod = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter chapterNumber.
         * @member {number} chapterNumber
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.chapterNumber = 0;

        /**
         * BackupChapter sourceOrder.
         * @member {number} sourceOrder
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.sourceOrder = 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BackupChapter _scanlator.
         * @member {"scanlator"|undefined} _scanlator
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         */
        Object.defineProperty(BackupChapter.prototype, "_scanlator", {
            get: $util.oneOfGetter($oneOfFields = ["scanlator"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BackupChapter instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {TachiyomiObjectModel.IBackupChapter=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupChapter} BackupChapter instance
         */
        BackupChapter.create = function create(properties) {
            return new BackupChapter(properties);
        };

        /**
         * Encodes the specified BackupChapter message. Does not implicitly {@link TachiyomiObjectModel.BackupChapter.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {TachiyomiObjectModel.IBackupChapter} message BackupChapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupChapter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.scanlator != null && Object.hasOwnProperty.call(message, "scanlator"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.scanlator);
            if (message.read != null && Object.hasOwnProperty.call(message, "read"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.read);
            if (message.bookmark != null && Object.hasOwnProperty.call(message, "bookmark"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.bookmark);
            if (message.lastPageRead != null && Object.hasOwnProperty.call(message, "lastPageRead"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lastPageRead);
            if (message.dateFetch != null && Object.hasOwnProperty.call(message, "dateFetch"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.dateFetch);
            if (message.dateUplaod != null && Object.hasOwnProperty.call(message, "dateUplaod"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.dateUplaod);
            if (message.chapterNumber != null && Object.hasOwnProperty.call(message, "chapterNumber"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.chapterNumber);
            if (message.sourceOrder != null && Object.hasOwnProperty.call(message, "sourceOrder"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.sourceOrder);
            return writer;
        };

        /**
         * Encodes the specified BackupChapter message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupChapter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {TachiyomiObjectModel.IBackupChapter} message BackupChapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupChapter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupChapter message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupChapter} BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupChapter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupChapter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.scanlator = reader.string();
                    break;
                case 4:
                    message.read = reader.bool();
                    break;
                case 5:
                    message.bookmark = reader.bool();
                    break;
                case 6:
                    message.lastPageRead = reader.int32();
                    break;
                case 7:
                    message.dateFetch = reader.int64();
                    break;
                case 8:
                    message.dateUplaod = reader.int64();
                    break;
                case 9:
                    message.chapterNumber = reader.float();
                    break;
                case 10:
                    message.sourceOrder = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupChapter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupChapter} BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupChapter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupChapter message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupChapter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.scanlator != null && message.hasOwnProperty("scanlator")) {
                properties._scanlator = 1;
                if (!$util.isString(message.scanlator))
                    return "scanlator: string expected";
            }
            if (message.read != null && message.hasOwnProperty("read"))
                if (typeof message.read !== "boolean")
                    return "read: boolean expected";
            if (message.bookmark != null && message.hasOwnProperty("bookmark"))
                if (typeof message.bookmark !== "boolean")
                    return "bookmark: boolean expected";
            if (message.lastPageRead != null && message.hasOwnProperty("lastPageRead"))
                if (!$util.isInteger(message.lastPageRead))
                    return "lastPageRead: integer expected";
            if (message.dateFetch != null && message.hasOwnProperty("dateFetch"))
                if (!$util.isInteger(message.dateFetch) && !(message.dateFetch && $util.isInteger(message.dateFetch.low) && $util.isInteger(message.dateFetch.high)))
                    return "dateFetch: integer|Long expected";
            if (message.dateUplaod != null && message.hasOwnProperty("dateUplaod"))
                if (!$util.isInteger(message.dateUplaod) && !(message.dateUplaod && $util.isInteger(message.dateUplaod.low) && $util.isInteger(message.dateUplaod.high)))
                    return "dateUplaod: integer|Long expected";
            if (message.chapterNumber != null && message.hasOwnProperty("chapterNumber"))
                if (typeof message.chapterNumber !== "number")
                    return "chapterNumber: number expected";
            if (message.sourceOrder != null && message.hasOwnProperty("sourceOrder"))
                if (!$util.isInteger(message.sourceOrder))
                    return "sourceOrder: integer expected";
            return null;
        };

        /**
         * Creates a BackupChapter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupChapter} BackupChapter
         */
        BackupChapter.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupChapter)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupChapter();
            if (object.url != null)
                message.url = String(object.url);
            if (object.name != null)
                message.name = String(object.name);
            if (object.scanlator != null)
                message.scanlator = String(object.scanlator);
            if (object.read != null)
                message.read = Boolean(object.read);
            if (object.bookmark != null)
                message.bookmark = Boolean(object.bookmark);
            if (object.lastPageRead != null)
                message.lastPageRead = object.lastPageRead | 0;
            if (object.dateFetch != null)
                if ($util.Long)
                    (message.dateFetch = $util.Long.fromValue(object.dateFetch)).unsigned = false;
                else if (typeof object.dateFetch === "string")
                    message.dateFetch = parseInt(object.dateFetch, 10);
                else if (typeof object.dateFetch === "number")
                    message.dateFetch = object.dateFetch;
                else if (typeof object.dateFetch === "object")
                    message.dateFetch = new $util.LongBits(object.dateFetch.low >>> 0, object.dateFetch.high >>> 0).toNumber();
            if (object.dateUplaod != null)
                if ($util.Long)
                    (message.dateUplaod = $util.Long.fromValue(object.dateUplaod)).unsigned = false;
                else if (typeof object.dateUplaod === "string")
                    message.dateUplaod = parseInt(object.dateUplaod, 10);
                else if (typeof object.dateUplaod === "number")
                    message.dateUplaod = object.dateUplaod;
                else if (typeof object.dateUplaod === "object")
                    message.dateUplaod = new $util.LongBits(object.dateUplaod.low >>> 0, object.dateUplaod.high >>> 0).toNumber();
            if (object.chapterNumber != null)
                message.chapterNumber = Number(object.chapterNumber);
            if (object.sourceOrder != null)
                message.sourceOrder = object.sourceOrder | 0;
            return message;
        };

        /**
         * Creates a plain object from a BackupChapter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupChapter
         * @static
         * @param {TachiyomiObjectModel.BackupChapter} message BackupChapter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupChapter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.name = "";
                object.read = false;
                object.bookmark = false;
                object.lastPageRead = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateFetch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateFetch = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateUplaod = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateUplaod = options.longs === String ? "0" : 0;
                object.chapterNumber = 0;
                object.sourceOrder = 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.scanlator != null && message.hasOwnProperty("scanlator")) {
                object.scanlator = message.scanlator;
                if (options.oneofs)
                    object._scanlator = "scanlator";
            }
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            if (message.bookmark != null && message.hasOwnProperty("bookmark"))
                object.bookmark = message.bookmark;
            if (message.lastPageRead != null && message.hasOwnProperty("lastPageRead"))
                object.lastPageRead = message.lastPageRead;
            if (message.dateFetch != null && message.hasOwnProperty("dateFetch"))
                if (typeof message.dateFetch === "number")
                    object.dateFetch = options.longs === String ? String(message.dateFetch) : message.dateFetch;
                else
                    object.dateFetch = options.longs === String ? $util.Long.prototype.toString.call(message.dateFetch) : options.longs === Number ? new $util.LongBits(message.dateFetch.low >>> 0, message.dateFetch.high >>> 0).toNumber() : message.dateFetch;
            if (message.dateUplaod != null && message.hasOwnProperty("dateUplaod"))
                if (typeof message.dateUplaod === "number")
                    object.dateUplaod = options.longs === String ? String(message.dateUplaod) : message.dateUplaod;
                else
                    object.dateUplaod = options.longs === String ? $util.Long.prototype.toString.call(message.dateUplaod) : options.longs === Number ? new $util.LongBits(message.dateUplaod.low >>> 0, message.dateUplaod.high >>> 0).toNumber() : message.dateUplaod;
            if (message.chapterNumber != null && message.hasOwnProperty("chapterNumber"))
                object.chapterNumber = options.json && !isFinite(message.chapterNumber) ? String(message.chapterNumber) : message.chapterNumber;
            if (message.sourceOrder != null && message.hasOwnProperty("sourceOrder"))
                object.sourceOrder = message.sourceOrder;
            return object;
        };

        /**
         * Converts this BackupChapter to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupChapter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupChapter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupChapter;
    })();

    TachiyomiObjectModel.BackupTracking = (function() {

        /**
         * Properties of a BackupTracking.
         * @memberof TachiyomiObjectModel
         * @interface IBackupTracking
         * @property {number|null} [syncId] BackupTracking syncId
         * @property {number|Long|null} [libraryId] BackupTracking libraryId
         * @property {number|null} [mediaId] BackupTracking mediaId
         * @property {string|null} [trackingUrl] BackupTracking trackingUrl
         * @property {string|null} [title] BackupTracking title
         * @property {number|null} [lastChapterRead] BackupTracking lastChapterRead
         * @property {number|null} [totalChapters] BackupTracking totalChapters
         * @property {number|null} [score] BackupTracking score
         * @property {number|null} [status] BackupTracking status
         * @property {number|Long|null} [startedReadingDate] BackupTracking startedReadingDate
         * @property {number|Long|null} [finishedReadingDate] BackupTracking finishedReadingDate
         */

        /**
         * Constructs a new BackupTracking.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupTracking.
         * @implements IBackupTracking
         * @constructor
         * @param {TachiyomiObjectModel.IBackupTracking=} [properties] Properties to set
         */
        function BackupTracking(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupTracking syncId.
         * @member {number} syncId
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.syncId = 0;

        /**
         * BackupTracking libraryId.
         * @member {number|Long} libraryId
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.libraryId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupTracking mediaId.
         * @member {number} mediaId
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.mediaId = 0;

        /**
         * BackupTracking trackingUrl.
         * @member {string} trackingUrl
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.trackingUrl = "";

        /**
         * BackupTracking title.
         * @member {string} title
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.title = "";

        /**
         * BackupTracking lastChapterRead.
         * @member {number} lastChapterRead
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.lastChapterRead = 0;

        /**
         * BackupTracking totalChapters.
         * @member {number} totalChapters
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.totalChapters = 0;

        /**
         * BackupTracking score.
         * @member {number} score
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.score = 0;

        /**
         * BackupTracking status.
         * @member {number} status
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.status = 0;

        /**
         * BackupTracking startedReadingDate.
         * @member {number|Long} startedReadingDate
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.startedReadingDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupTracking finishedReadingDate.
         * @member {number|Long} finishedReadingDate
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.finishedReadingDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupTracking instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {TachiyomiObjectModel.IBackupTracking=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupTracking} BackupTracking instance
         */
        BackupTracking.create = function create(properties) {
            return new BackupTracking(properties);
        };

        /**
         * Encodes the specified BackupTracking message. Does not implicitly {@link TachiyomiObjectModel.BackupTracking.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {TachiyomiObjectModel.IBackupTracking} message BackupTracking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupTracking.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.syncId != null && Object.hasOwnProperty.call(message, "syncId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.syncId);
            if (message.libraryId != null && Object.hasOwnProperty.call(message, "libraryId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.libraryId);
            if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mediaId);
            if (message.trackingUrl != null && Object.hasOwnProperty.call(message, "trackingUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.trackingUrl);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.lastChapterRead != null && Object.hasOwnProperty.call(message, "lastChapterRead"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.lastChapterRead);
            if (message.totalChapters != null && Object.hasOwnProperty.call(message, "totalChapters"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.totalChapters);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.score);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
            if (message.startedReadingDate != null && Object.hasOwnProperty.call(message, "startedReadingDate"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startedReadingDate);
            if (message.finishedReadingDate != null && Object.hasOwnProperty.call(message, "finishedReadingDate"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.finishedReadingDate);
            return writer;
        };

        /**
         * Encodes the specified BackupTracking message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupTracking.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {TachiyomiObjectModel.IBackupTracking} message BackupTracking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupTracking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupTracking message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupTracking} BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupTracking.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupTracking();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.syncId = reader.int32();
                    break;
                case 2:
                    message.libraryId = reader.int64();
                    break;
                case 3:
                    message.mediaId = reader.int32();
                    break;
                case 4:
                    message.trackingUrl = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.lastChapterRead = reader.float();
                    break;
                case 7:
                    message.totalChapters = reader.int32();
                    break;
                case 8:
                    message.score = reader.float();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.startedReadingDate = reader.int64();
                    break;
                case 11:
                    message.finishedReadingDate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupTracking message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupTracking} BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupTracking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupTracking message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupTracking.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.syncId != null && message.hasOwnProperty("syncId"))
                if (!$util.isInteger(message.syncId))
                    return "syncId: integer expected";
            if (message.libraryId != null && message.hasOwnProperty("libraryId"))
                if (!$util.isInteger(message.libraryId) && !(message.libraryId && $util.isInteger(message.libraryId.low) && $util.isInteger(message.libraryId.high)))
                    return "libraryId: integer|Long expected";
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                if (!$util.isInteger(message.mediaId))
                    return "mediaId: integer expected";
            if (message.trackingUrl != null && message.hasOwnProperty("trackingUrl"))
                if (!$util.isString(message.trackingUrl))
                    return "trackingUrl: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.lastChapterRead != null && message.hasOwnProperty("lastChapterRead"))
                if (typeof message.lastChapterRead !== "number")
                    return "lastChapterRead: number expected";
            if (message.totalChapters != null && message.hasOwnProperty("totalChapters"))
                if (!$util.isInteger(message.totalChapters))
                    return "totalChapters: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score !== "number")
                    return "score: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.startedReadingDate != null && message.hasOwnProperty("startedReadingDate"))
                if (!$util.isInteger(message.startedReadingDate) && !(message.startedReadingDate && $util.isInteger(message.startedReadingDate.low) && $util.isInteger(message.startedReadingDate.high)))
                    return "startedReadingDate: integer|Long expected";
            if (message.finishedReadingDate != null && message.hasOwnProperty("finishedReadingDate"))
                if (!$util.isInteger(message.finishedReadingDate) && !(message.finishedReadingDate && $util.isInteger(message.finishedReadingDate.low) && $util.isInteger(message.finishedReadingDate.high)))
                    return "finishedReadingDate: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupTracking message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupTracking} BackupTracking
         */
        BackupTracking.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupTracking)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupTracking();
            if (object.syncId != null)
                message.syncId = object.syncId | 0;
            if (object.libraryId != null)
                if ($util.Long)
                    (message.libraryId = $util.Long.fromValue(object.libraryId)).unsigned = false;
                else if (typeof object.libraryId === "string")
                    message.libraryId = parseInt(object.libraryId, 10);
                else if (typeof object.libraryId === "number")
                    message.libraryId = object.libraryId;
                else if (typeof object.libraryId === "object")
                    message.libraryId = new $util.LongBits(object.libraryId.low >>> 0, object.libraryId.high >>> 0).toNumber();
            if (object.mediaId != null)
                message.mediaId = object.mediaId | 0;
            if (object.trackingUrl != null)
                message.trackingUrl = String(object.trackingUrl);
            if (object.title != null)
                message.title = String(object.title);
            if (object.lastChapterRead != null)
                message.lastChapterRead = Number(object.lastChapterRead);
            if (object.totalChapters != null)
                message.totalChapters = object.totalChapters | 0;
            if (object.score != null)
                message.score = Number(object.score);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.startedReadingDate != null)
                if ($util.Long)
                    (message.startedReadingDate = $util.Long.fromValue(object.startedReadingDate)).unsigned = false;
                else if (typeof object.startedReadingDate === "string")
                    message.startedReadingDate = parseInt(object.startedReadingDate, 10);
                else if (typeof object.startedReadingDate === "number")
                    message.startedReadingDate = object.startedReadingDate;
                else if (typeof object.startedReadingDate === "object")
                    message.startedReadingDate = new $util.LongBits(object.startedReadingDate.low >>> 0, object.startedReadingDate.high >>> 0).toNumber();
            if (object.finishedReadingDate != null)
                if ($util.Long)
                    (message.finishedReadingDate = $util.Long.fromValue(object.finishedReadingDate)).unsigned = false;
                else if (typeof object.finishedReadingDate === "string")
                    message.finishedReadingDate = parseInt(object.finishedReadingDate, 10);
                else if (typeof object.finishedReadingDate === "number")
                    message.finishedReadingDate = object.finishedReadingDate;
                else if (typeof object.finishedReadingDate === "object")
                    message.finishedReadingDate = new $util.LongBits(object.finishedReadingDate.low >>> 0, object.finishedReadingDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupTracking message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupTracking
         * @static
         * @param {TachiyomiObjectModel.BackupTracking} message BackupTracking
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupTracking.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.syncId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.libraryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.libraryId = options.longs === String ? "0" : 0;
                object.mediaId = 0;
                object.trackingUrl = "";
                object.title = "";
                object.lastChapterRead = 0;
                object.totalChapters = 0;
                object.score = 0;
                object.status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startedReadingDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startedReadingDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishedReadingDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishedReadingDate = options.longs === String ? "0" : 0;
            }
            if (message.syncId != null && message.hasOwnProperty("syncId"))
                object.syncId = message.syncId;
            if (message.libraryId != null && message.hasOwnProperty("libraryId"))
                if (typeof message.libraryId === "number")
                    object.libraryId = options.longs === String ? String(message.libraryId) : message.libraryId;
                else
                    object.libraryId = options.longs === String ? $util.Long.prototype.toString.call(message.libraryId) : options.longs === Number ? new $util.LongBits(message.libraryId.low >>> 0, message.libraryId.high >>> 0).toNumber() : message.libraryId;
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                object.mediaId = message.mediaId;
            if (message.trackingUrl != null && message.hasOwnProperty("trackingUrl"))
                object.trackingUrl = message.trackingUrl;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.lastChapterRead != null && message.hasOwnProperty("lastChapterRead"))
                object.lastChapterRead = options.json && !isFinite(message.lastChapterRead) ? String(message.lastChapterRead) : message.lastChapterRead;
            if (message.totalChapters != null && message.hasOwnProperty("totalChapters"))
                object.totalChapters = message.totalChapters;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.startedReadingDate != null && message.hasOwnProperty("startedReadingDate"))
                if (typeof message.startedReadingDate === "number")
                    object.startedReadingDate = options.longs === String ? String(message.startedReadingDate) : message.startedReadingDate;
                else
                    object.startedReadingDate = options.longs === String ? $util.Long.prototype.toString.call(message.startedReadingDate) : options.longs === Number ? new $util.LongBits(message.startedReadingDate.low >>> 0, message.startedReadingDate.high >>> 0).toNumber() : message.startedReadingDate;
            if (message.finishedReadingDate != null && message.hasOwnProperty("finishedReadingDate"))
                if (typeof message.finishedReadingDate === "number")
                    object.finishedReadingDate = options.longs === String ? String(message.finishedReadingDate) : message.finishedReadingDate;
                else
                    object.finishedReadingDate = options.longs === String ? $util.Long.prototype.toString.call(message.finishedReadingDate) : options.longs === Number ? new $util.LongBits(message.finishedReadingDate.low >>> 0, message.finishedReadingDate.high >>> 0).toNumber() : message.finishedReadingDate;
            return object;
        };

        /**
         * Converts this BackupTracking to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupTracking
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupTracking.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupTracking;
    })();

    TachiyomiObjectModel.BackupHistory = (function() {

        /**
         * Properties of a BackupHistory.
         * @memberof TachiyomiObjectModel
         * @interface IBackupHistory
         * @property {string|null} [url] BackupHistory url
         * @property {number|Long|null} [lastRead] BackupHistory lastRead
         */

        /**
         * Constructs a new BackupHistory.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupHistory.
         * @implements IBackupHistory
         * @constructor
         * @param {TachiyomiObjectModel.IBackupHistory=} [properties] Properties to set
         */
        function BackupHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupHistory url.
         * @member {string} url
         * @memberof TachiyomiObjectModel.BackupHistory
         * @instance
         */
        BackupHistory.prototype.url = "";

        /**
         * BackupHistory lastRead.
         * @member {number|Long} lastRead
         * @memberof TachiyomiObjectModel.BackupHistory
         * @instance
         */
        BackupHistory.prototype.lastRead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupHistory instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {TachiyomiObjectModel.IBackupHistory=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupHistory} BackupHistory instance
         */
        BackupHistory.create = function create(properties) {
            return new BackupHistory(properties);
        };

        /**
         * Encodes the specified BackupHistory message. Does not implicitly {@link TachiyomiObjectModel.BackupHistory.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {TachiyomiObjectModel.IBackupHistory} message BackupHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 0, wireType 2 =*/2).string(message.url);
            if (message.lastRead != null && Object.hasOwnProperty.call(message, "lastRead"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastRead);
            return writer;
        };

        /**
         * Encodes the specified BackupHistory message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {TachiyomiObjectModel.IBackupHistory} message BackupHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupHistory message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupHistory} BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.url = reader.string();
                    break;
                case 1:
                    message.lastRead = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupHistory} BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupHistory message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.lastRead != null && message.hasOwnProperty("lastRead"))
                if (!$util.isInteger(message.lastRead) && !(message.lastRead && $util.isInteger(message.lastRead.low) && $util.isInteger(message.lastRead.high)))
                    return "lastRead: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupHistory} BackupHistory
         */
        BackupHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupHistory)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupHistory();
            if (object.url != null)
                message.url = String(object.url);
            if (object.lastRead != null)
                if ($util.Long)
                    (message.lastRead = $util.Long.fromValue(object.lastRead)).unsigned = false;
                else if (typeof object.lastRead === "string")
                    message.lastRead = parseInt(object.lastRead, 10);
                else if (typeof object.lastRead === "number")
                    message.lastRead = object.lastRead;
                else if (typeof object.lastRead === "object")
                    message.lastRead = new $util.LongBits(object.lastRead.low >>> 0, object.lastRead.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupHistory
         * @static
         * @param {TachiyomiObjectModel.BackupHistory} message BackupHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastRead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastRead = options.longs === String ? "0" : 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.lastRead != null && message.hasOwnProperty("lastRead"))
                if (typeof message.lastRead === "number")
                    object.lastRead = options.longs === String ? String(message.lastRead) : message.lastRead;
                else
                    object.lastRead = options.longs === String ? $util.Long.prototype.toString.call(message.lastRead) : options.longs === Number ? new $util.LongBits(message.lastRead.low >>> 0, message.lastRead.high >>> 0).toNumber() : message.lastRead;
            return object;
        };

        /**
         * Converts this BackupHistory to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupHistory;
    })();

    TachiyomiObjectModel.BackupCategory = (function() {

        /**
         * Properties of a BackupCategory.
         * @memberof TachiyomiObjectModel
         * @interface IBackupCategory
         * @property {string|null} [name] BackupCategory name
         * @property {number|null} [order] BackupCategory order
         * @property {number|null} [flags] BackupCategory flags
         */

        /**
         * Constructs a new BackupCategory.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupCategory.
         * @implements IBackupCategory
         * @constructor
         * @param {TachiyomiObjectModel.IBackupCategory=} [properties] Properties to set
         */
        function BackupCategory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupCategory name.
         * @member {string} name
         * @memberof TachiyomiObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.name = "";

        /**
         * BackupCategory order.
         * @member {number} order
         * @memberof TachiyomiObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.order = 0;

        /**
         * BackupCategory flags.
         * @member {number} flags
         * @memberof TachiyomiObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.flags = 0;

        /**
         * Creates a new BackupCategory instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {TachiyomiObjectModel.IBackupCategory=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupCategory} BackupCategory instance
         */
        BackupCategory.create = function create(properties) {
            return new BackupCategory(properties);
        };

        /**
         * Encodes the specified BackupCategory message. Does not implicitly {@link TachiyomiObjectModel.BackupCategory.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {TachiyomiObjectModel.IBackupCategory} message BackupCategory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCategory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.order);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 100, wireType 0 =*/800).int32(message.flags);
            return writer;
        };

        /**
         * Encodes the specified BackupCategory message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupCategory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {TachiyomiObjectModel.IBackupCategory} message BackupCategory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCategory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupCategory message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupCategory} BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCategory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupCategory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.order = reader.int32();
                    break;
                case 100:
                    message.flags = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupCategory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupCategory} BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCategory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupCategory message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupCategory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.order != null && message.hasOwnProperty("order"))
                if (!$util.isInteger(message.order))
                    return "order: integer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            return null;
        };

        /**
         * Creates a BackupCategory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupCategory} BackupCategory
         */
        BackupCategory.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupCategory)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupCategory();
            if (object.name != null)
                message.name = String(object.name);
            if (object.order != null)
                message.order = object.order | 0;
            if (object.flags != null)
                message.flags = object.flags | 0;
            return message;
        };

        /**
         * Creates a plain object from a BackupCategory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupCategory
         * @static
         * @param {TachiyomiObjectModel.BackupCategory} message BackupCategory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupCategory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.order = 0;
                object.flags = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = message.order;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            return object;
        };

        /**
         * Converts this BackupCategory to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupCategory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupCategory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupCategory;
    })();

    TachiyomiObjectModel.BackupSource = (function() {

        /**
         * Properties of a BackupSource.
         * @memberof TachiyomiObjectModel
         * @interface IBackupSource
         * @property {string|null} [name] BackupSource name
         * @property {number|Long|null} [sourceId] BackupSource sourceId
         */

        /**
         * Constructs a new BackupSource.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a BackupSource.
         * @implements IBackupSource
         * @constructor
         * @param {TachiyomiObjectModel.IBackupSource=} [properties] Properties to set
         */
        function BackupSource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupSource name.
         * @member {string} name
         * @memberof TachiyomiObjectModel.BackupSource
         * @instance
         */
        BackupSource.prototype.name = "";

        /**
         * BackupSource sourceId.
         * @member {number|Long} sourceId
         * @memberof TachiyomiObjectModel.BackupSource
         * @instance
         */
        BackupSource.prototype.sourceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupSource instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {TachiyomiObjectModel.IBackupSource=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.BackupSource} BackupSource instance
         */
        BackupSource.create = function create(properties) {
            return new BackupSource(properties);
        };

        /**
         * Encodes the specified BackupSource message. Does not implicitly {@link TachiyomiObjectModel.BackupSource.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {TachiyomiObjectModel.IBackupSource} message BackupSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupSource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 0, wireType 2 =*/2).string(message.name);
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sourceId);
            return writer;
        };

        /**
         * Encodes the specified BackupSource message, length delimited. Does not implicitly {@link TachiyomiObjectModel.BackupSource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {TachiyomiObjectModel.IBackupSource} message BackupSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupSource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupSource message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.BackupSource} BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupSource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.BackupSource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.name = reader.string();
                    break;
                case 1:
                    message.sourceId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackupSource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.BackupSource} BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupSource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupSource message.
         * @function verify
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupSource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (!$util.isInteger(message.sourceId) && !(message.sourceId && $util.isInteger(message.sourceId.low) && $util.isInteger(message.sourceId.high)))
                    return "sourceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.BackupSource} BackupSource
         */
        BackupSource.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.BackupSource)
                return object;
            var message = new $root.TachiyomiObjectModel.BackupSource();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sourceId != null)
                if ($util.Long)
                    (message.sourceId = $util.Long.fromValue(object.sourceId)).unsigned = false;
                else if (typeof object.sourceId === "string")
                    message.sourceId = parseInt(object.sourceId, 10);
                else if (typeof object.sourceId === "number")
                    message.sourceId = object.sourceId;
                else if (typeof object.sourceId === "object")
                    message.sourceId = new $util.LongBits(object.sourceId.low >>> 0, object.sourceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.BackupSource
         * @static
         * @param {TachiyomiObjectModel.BackupSource} message BackupSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupSource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sourceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sourceId = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (typeof message.sourceId === "number")
                    object.sourceId = options.longs === String ? String(message.sourceId) : message.sourceId;
                else
                    object.sourceId = options.longs === String ? $util.Long.prototype.toString.call(message.sourceId) : options.longs === Number ? new $util.LongBits(message.sourceId.low >>> 0, message.sourceId.high >>> 0).toNumber() : message.sourceId;
            return object;
        };

        /**
         * Converts this BackupSource to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.BackupSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackupSource;
    })();

    TachiyomiObjectModel.Backup = (function() {

        /**
         * Properties of a Backup.
         * @memberof TachiyomiObjectModel
         * @interface IBackup
         * @property {Array.<TachiyomiObjectModel.IBackupManga>|null} [backupManga] Backup backupManga
         * @property {Array.<TachiyomiObjectModel.IBackupCategory>|null} [backupCategories] Backup backupCategories
         * @property {Array.<TachiyomiObjectModel.IBackupSource>|null} [backupSources] Backup backupSources
         */

        /**
         * Constructs a new Backup.
         * @memberof TachiyomiObjectModel
         * @classdesc Represents a Backup.
         * @implements IBackup
         * @constructor
         * @param {TachiyomiObjectModel.IBackup=} [properties] Properties to set
         */
        function Backup(properties) {
            this.backupManga = [];
            this.backupCategories = [];
            this.backupSources = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Backup backupManga.
         * @member {Array.<TachiyomiObjectModel.IBackupManga>} backupManga
         * @memberof TachiyomiObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupManga = $util.emptyArray;

        /**
         * Backup backupCategories.
         * @member {Array.<TachiyomiObjectModel.IBackupCategory>} backupCategories
         * @memberof TachiyomiObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupCategories = $util.emptyArray;

        /**
         * Backup backupSources.
         * @member {Array.<TachiyomiObjectModel.IBackupSource>} backupSources
         * @memberof TachiyomiObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupSources = $util.emptyArray;

        /**
         * Creates a new Backup instance using the specified properties.
         * @function create
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {TachiyomiObjectModel.IBackup=} [properties] Properties to set
         * @returns {TachiyomiObjectModel.Backup} Backup instance
         */
        Backup.create = function create(properties) {
            return new Backup(properties);
        };

        /**
         * Encodes the specified Backup message. Does not implicitly {@link TachiyomiObjectModel.Backup.verify|verify} messages.
         * @function encode
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {TachiyomiObjectModel.IBackup} message Backup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.backupManga != null && message.backupManga.length)
                for (var i = 0; i < message.backupManga.length; ++i)
                    $root.TachiyomiObjectModel.BackupManga.encode(message.backupManga[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.backupCategories != null && message.backupCategories.length)
                for (var i = 0; i < message.backupCategories.length; ++i)
                    $root.TachiyomiObjectModel.BackupCategory.encode(message.backupCategories[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.backupSources != null && message.backupSources.length)
                for (var i = 0; i < message.backupSources.length; ++i)
                    $root.TachiyomiObjectModel.BackupSource.encode(message.backupSources[i], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Backup message, length delimited. Does not implicitly {@link TachiyomiObjectModel.Backup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {TachiyomiObjectModel.IBackup} message Backup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Backup message from the specified reader or buffer.
         * @function decode
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TachiyomiObjectModel.Backup} Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TachiyomiObjectModel.Backup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.backupManga && message.backupManga.length))
                        message.backupManga = [];
                    message.backupManga.push($root.TachiyomiObjectModel.BackupManga.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.backupCategories && message.backupCategories.length))
                        message.backupCategories = [];
                    message.backupCategories.push($root.TachiyomiObjectModel.BackupCategory.decode(reader, reader.uint32()));
                    break;
                case 100:
                    if (!(message.backupSources && message.backupSources.length))
                        message.backupSources = [];
                    message.backupSources.push($root.TachiyomiObjectModel.BackupSource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Backup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TachiyomiObjectModel.Backup} Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Backup message.
         * @function verify
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Backup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.backupManga != null && message.hasOwnProperty("backupManga")) {
                if (!Array.isArray(message.backupManga))
                    return "backupManga: array expected";
                for (var i = 0; i < message.backupManga.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupManga.verify(message.backupManga[i]);
                    if (error)
                        return "backupManga." + error;
                }
            }
            if (message.backupCategories != null && message.hasOwnProperty("backupCategories")) {
                if (!Array.isArray(message.backupCategories))
                    return "backupCategories: array expected";
                for (var i = 0; i < message.backupCategories.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupCategory.verify(message.backupCategories[i]);
                    if (error)
                        return "backupCategories." + error;
                }
            }
            if (message.backupSources != null && message.hasOwnProperty("backupSources")) {
                if (!Array.isArray(message.backupSources))
                    return "backupSources: array expected";
                for (var i = 0; i < message.backupSources.length; ++i) {
                    var error = $root.TachiyomiObjectModel.BackupSource.verify(message.backupSources[i]);
                    if (error)
                        return "backupSources." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Backup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TachiyomiObjectModel.Backup} Backup
         */
        Backup.fromObject = function fromObject(object) {
            if (object instanceof $root.TachiyomiObjectModel.Backup)
                return object;
            var message = new $root.TachiyomiObjectModel.Backup();
            if (object.backupManga) {
                if (!Array.isArray(object.backupManga))
                    throw TypeError(".TachiyomiObjectModel.Backup.backupManga: array expected");
                message.backupManga = [];
                for (var i = 0; i < object.backupManga.length; ++i) {
                    if (typeof object.backupManga[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.Backup.backupManga: object expected");
                    message.backupManga[i] = $root.TachiyomiObjectModel.BackupManga.fromObject(object.backupManga[i]);
                }
            }
            if (object.backupCategories) {
                if (!Array.isArray(object.backupCategories))
                    throw TypeError(".TachiyomiObjectModel.Backup.backupCategories: array expected");
                message.backupCategories = [];
                for (var i = 0; i < object.backupCategories.length; ++i) {
                    if (typeof object.backupCategories[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.Backup.backupCategories: object expected");
                    message.backupCategories[i] = $root.TachiyomiObjectModel.BackupCategory.fromObject(object.backupCategories[i]);
                }
            }
            if (object.backupSources) {
                if (!Array.isArray(object.backupSources))
                    throw TypeError(".TachiyomiObjectModel.Backup.backupSources: array expected");
                message.backupSources = [];
                for (var i = 0; i < object.backupSources.length; ++i) {
                    if (typeof object.backupSources[i] !== "object")
                        throw TypeError(".TachiyomiObjectModel.Backup.backupSources: object expected");
                    message.backupSources[i] = $root.TachiyomiObjectModel.BackupSource.fromObject(object.backupSources[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Backup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TachiyomiObjectModel.Backup
         * @static
         * @param {TachiyomiObjectModel.Backup} message Backup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Backup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.backupManga = [];
                object.backupCategories = [];
                object.backupSources = [];
            }
            if (message.backupManga && message.backupManga.length) {
                object.backupManga = [];
                for (var j = 0; j < message.backupManga.length; ++j)
                    object.backupManga[j] = $root.TachiyomiObjectModel.BackupManga.toObject(message.backupManga[j], options);
            }
            if (message.backupCategories && message.backupCategories.length) {
                object.backupCategories = [];
                for (var j = 0; j < message.backupCategories.length; ++j)
                    object.backupCategories[j] = $root.TachiyomiObjectModel.BackupCategory.toObject(message.backupCategories[j], options);
            }
            if (message.backupSources && message.backupSources.length) {
                object.backupSources = [];
                for (var j = 0; j < message.backupSources.length; ++j)
                    object.backupSources[j] = $root.TachiyomiObjectModel.BackupSource.toObject(message.backupSources[j], options);
            }
            return object;
        };

        /**
         * Converts this Backup to JSON.
         * @function toJSON
         * @memberof TachiyomiObjectModel.Backup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Backup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Backup;
    })();

    return TachiyomiObjectModel;
})();

module.exports = $root;
