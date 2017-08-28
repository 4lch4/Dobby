'use strict'

const Eris = require('eris');
const config = require('./util/config.json');
const bot = new Eris(config.botToken);

const Tools = require('./util/Tools');
const tools = new Tools();

const TypoFinder = require('./TypoFinder');
const typo = new TypoFinder();

bot.on('messageCreate', msg => {
    if (msg.author.id == 219270060936527873 && !msg.content.startsWith('t!')) {
        typo.checkSpelling(msg.content).then(newMsg => {
            typo.checkCapitalization(newMsg).then(capitalized => {
                if (capitalized !== msg.content) {
                    msg.edit(capitalized)
                        .catch(err => {
                            return console.log(err);
                        });
                }
            });
        });
    }
});

bot.on('ready', () => {
    let random = tools.getRandom(0, config.dobbyQuotes.length);
    console.log(config.dobbyQuotes[random]);
    console.log(config.dobby.join('\n'));
});

bot.connect();