// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.spanner = (function () {
  /**
   * Namespace spanner.
   * @exports spanner
   * @namespace
   */
  var spanner = {};

  spanner.examples = (function () {
    /**
     * Namespace examples.
     * @memberof spanner
     * @namespace
     */
    var examples = {};

    examples.music = (function () {
      /**
       * Namespace music.
       * @memberof spanner.examples
       * @namespace
       */
      var music = {};

      music.SingerInfo = (function () {
        /**
         * Properties of a SingerInfo.
         * @memberof spanner.examples.music
         * @interface ISingerInfo
         * @property {number|Long|null} [singerId] SingerInfo singerId
         * @property {string|null} [birthDate] SingerInfo birthDate
         * @property {string|null} [nationality] SingerInfo nationality
         * @property {spanner.examples.music.Genre|null} [genre] SingerInfo genre
         */

        /**
         * Constructs a new SingerInfo.
         * @memberof spanner.examples.music
         * @classdesc Represents a SingerInfo.
         * @implements ISingerInfo
         * @constructor
         * @param {spanner.examples.music.ISingerInfo=} [properties] Properties to set
         */
        function SingerInfo(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * SingerInfo singerId.
         * @member {number|Long} singerId
         * @memberof spanner.examples.music.SingerInfo
         * @instance
         */
        SingerInfo.prototype.singerId = $util.Long
          ? $util.Long.fromBits(0, 0, false)
          : 0;

        /**
         * SingerInfo birthDate.
         * @member {string} birthDate
         * @memberof spanner.examples.music.SingerInfo
         * @instance
         */
        SingerInfo.prototype.birthDate = '';

        /**
         * SingerInfo nationality.
         * @member {string} nationality
         * @memberof spanner.examples.music.SingerInfo
         * @instance
         */
        SingerInfo.prototype.nationality = '';

        /**
         * SingerInfo genre.
         * @member {spanner.examples.music.Genre} genre
         * @memberof spanner.examples.music.SingerInfo
         * @instance
         */
        SingerInfo.prototype.genre = 0;

        /**
         * Creates a new SingerInfo instance using the specified properties.
         * @function create
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {spanner.examples.music.ISingerInfo=} [properties] Properties to set
         * @returns {spanner.examples.music.SingerInfo} SingerInfo instance
         */
        SingerInfo.create = function create(properties) {
          return new SingerInfo(properties);
        };

        /**
         * Encodes the specified SingerInfo message. Does not implicitly {@link spanner.examples.music.SingerInfo.verify|verify} messages.
         * @function encode
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {spanner.examples.music.ISingerInfo} message SingerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingerInfo.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.singerId != null &&
            Object.hasOwnProperty.call(message, 'singerId')
          )
            writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.singerId);
          if (
            message.birthDate != null &&
            Object.hasOwnProperty.call(message, 'birthDate')
          )
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.birthDate);
          if (
            message.nationality != null &&
            Object.hasOwnProperty.call(message, 'nationality')
          )
            writer
              .uint32(/* id 3, wireType 2 =*/ 26)
              .string(message.nationality);
          if (
            message.genre != null &&
            Object.hasOwnProperty.call(message, 'genre')
          )
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.genre);
          return writer;
        };

        /**
         * Encodes the specified SingerInfo message, length delimited. Does not implicitly {@link spanner.examples.music.SingerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {spanner.examples.music.ISingerInfo} message SingerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingerInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SingerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {spanner.examples.music.SingerInfo} SingerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingerInfo.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.spanner.examples.music.SingerInfo();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.singerId = reader.int64();
                break;
              }
              case 2: {
                message.birthDate = reader.string();
                break;
              }
              case 3: {
                message.nationality = reader.string();
                break;
              }
              case 4: {
                message.genre = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a SingerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {spanner.examples.music.SingerInfo} SingerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingerInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SingerInfo message.
         * @function verify
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SingerInfo.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected';
          if (message.singerId != null && message.hasOwnProperty('singerId'))
            if (
              !$util.isInteger(message.singerId) &&
              !(
                message.singerId &&
                $util.isInteger(message.singerId.low) &&
                $util.isInteger(message.singerId.high)
              )
            )
              return 'singerId: integer|Long expected';
          if (message.birthDate != null && message.hasOwnProperty('birthDate'))
            if (!$util.isString(message.birthDate))
              return 'birthDate: string expected';
          if (
            message.nationality != null &&
            message.hasOwnProperty('nationality')
          )
            if (!$util.isString(message.nationality))
              return 'nationality: string expected';
          if (message.genre != null && message.hasOwnProperty('genre'))
            switch (message.genre) {
              default:
                return 'genre: enum value expected';
              case 0:
              case 1:
              case 2:
              case 3:
                break;
            }
          return null;
        };

        /**
         * Creates a SingerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {spanner.examples.music.SingerInfo} SingerInfo
         */
        SingerInfo.fromObject = function fromObject(object) {
          if (object instanceof $root.spanner.examples.music.SingerInfo)
            return object;
          var message = new $root.spanner.examples.music.SingerInfo();
          if (object.singerId != null)
            if ($util.Long)
              (message.singerId = $util.Long.fromValue(
                object.singerId
              )).unsigned = false;
            else if (typeof object.singerId === 'string')
              message.singerId = parseInt(object.singerId, 10);
            else if (typeof object.singerId === 'number')
              message.singerId = object.singerId;
            else if (typeof object.singerId === 'object')
              message.singerId = new $util.LongBits(
                object.singerId.low >>> 0,
                object.singerId.high >>> 0
              ).toNumber();
          if (object.birthDate != null)
            message.birthDate = String(object.birthDate);
          if (object.nationality != null)
            message.nationality = String(object.nationality);
          switch (object.genre) {
            default:
              if (typeof object.genre === 'number') {
                message.genre = object.genre;
                break;
              }
              break;
            case 'POP':
            case 0:
              message.genre = 0;
              break;
            case 'JAZZ':
            case 1:
              message.genre = 1;
              break;
            case 'FOLK':
            case 2:
              message.genre = 2;
              break;
            case 'ROCK':
            case 3:
              message.genre = 3;
              break;
          }
          return message;
        };

        /**
         * Creates a plain object from a SingerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {spanner.examples.music.SingerInfo} message SingerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SingerInfo.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.singerId =
                options.longs === String
                  ? long.toString()
                  : options.longs === Number
                  ? long.toNumber()
                  : long;
            } else object.singerId = options.longs === String ? '0' : 0;
            object.birthDate = '';
            object.nationality = '';
            object.genre = options.enums === String ? 'POP' : 0;
          }
          if (message.singerId != null && message.hasOwnProperty('singerId'))
            if (typeof message.singerId === 'number')
              object.singerId =
                options.longs === String
                  ? String(message.singerId)
                  : message.singerId;
            else
              object.singerId =
                options.longs === String
                  ? $util.Long.prototype.toString.call(message.singerId)
                  : options.longs === Number
                  ? new $util.LongBits(
                      message.singerId.low >>> 0,
                      message.singerId.high >>> 0
                    ).toNumber()
                  : message.singerId;
          if (message.birthDate != null && message.hasOwnProperty('birthDate'))
            object.birthDate = message.birthDate;
          if (
            message.nationality != null &&
            message.hasOwnProperty('nationality')
          )
            object.nationality = message.nationality;
          if (message.genre != null && message.hasOwnProperty('genre'))
            object.genre =
              options.enums === String
                ? $root.spanner.examples.music.Genre[message.genre] ===
                  undefined
                  ? message.genre
                  : $root.spanner.examples.music.Genre[message.genre]
                : message.genre;
          return object;
        };

        /**
         * Converts this SingerInfo to JSON.
         * @function toJSON
         * @memberof spanner.examples.music.SingerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SingerInfo.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SingerInfo
         * @function getTypeUrl
         * @memberof spanner.examples.music.SingerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SingerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/spanner.examples.music.SingerInfo';
        };

        return SingerInfo;
      })();

      /**
       * Genre enum.
       * @name spanner.examples.music.Genre
       * @enum {number}
       * @property {number} POP=0 POP value
       * @property {number} JAZZ=1 JAZZ value
       * @property {number} FOLK=2 FOLK value
       * @property {number} ROCK=3 ROCK value
       */
      music.Genre = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'POP')] = 0;
        values[(valuesById[1] = 'JAZZ')] = 1;
        values[(valuesById[2] = 'FOLK')] = 2;
        values[(valuesById[3] = 'ROCK')] = 3;
        return values;
      })();

      return music;
    })();

    return examples;
  })();

  return spanner;
})();

module.exports = $root;
