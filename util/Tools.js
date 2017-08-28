'use strict'

/**
 * Contains various methods to aid Dobby in his quest of spell checking messages.
 */
class Tools {
    constructor(options) {
        this.options = options || {};
    }

    /**
     * Returns true or false, is the first letter of the provided String upper case?
     * 
     * @param {String} str 
     */
    isFirstLetterUpper(str) {
        return new Promise((resolve, reject) => {
            resolve(str[0] === str[0].toUpperCase());
        });
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive).
     * 
     * @param {Number} min 
     * @param {Number} max 
     */
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Tools;