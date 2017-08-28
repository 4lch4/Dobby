const wordList = require('./util/Word_List.json');
const Tools = require('./util/Tools');
const tools = new Tools();

/**
 * Contains the methods used to detect typos and grammar errors within
 * messages.
 */
class TypoFinder {
    constructor(options) {
        this.options = options || {};
    }

    /**
     * Check the spelling of the words within the provided String. If any of them appear within
     * the WordList of commonly spelled words, it is replaced and returned through a promise.
     * 
     * @param {String} content 
     */
    checkSpelling(content) {
        return new Promise((resolve, reject) => {
            let words = content.split(/\b/);

            for (let x = 0; x < words.length; x++) {
                let currWord = words[x];

                let correctWord = wordList[currWord.toLowerCase()];

                if (correctWord != undefined) {
                    words[x] = correctWord;
                }
            }

            resolve(words.join(''));
        });
    }

    /**
     * Check the provided String for capitalization rules and if any are violated, they're
     * fixed and the updated String is returned through a promise.
     * 
     * @param {String} content
     */
    checkCapitalization(content) {
        return new Promise((resolve, reject) => {
            let words = content.split(/\b/);
            tools.isFirstLetterUpper(words[0]).then(upper => {
                if (!upper) {
                    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
                }

                resolve(words.join(''));
            });
        });
    }
}

module.exports = TypoFinder;