/**
 * Copyright (c) 2014 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

var validator = function(dataType, value) {

    var numberValidator = function(value) {
        if (value.match(/^[-]?[0-9]+\.?[0-9]*$/)) {
            return true;
        }
        return false;
    };

    var booleanValidator = function(value) {
        if (value !== '0' && value !== '1') {
            return false;
        }
        return true;
    };

    this.validate = function() {
        switch (dataType) {
            case 'Number':
                return numberValidator(value);
            case 'Boolean':
                return booleanValidator(value);
            case 'String':
                return true;
            case 'ByteArray':
                return true;
            default:
                return false;
        }
    };
};

module.exports = validator;
