# Dobby

Dobby is a self bot built for Discord using the [eris](https://github.com/abalabahaha/eris) library as an experiment in spell-checking messages. Currently, the bot will read messages that you send and look for common spelling mistakes. If any are detected, the correct spelling is replaced and the message is edited by the bot.

## Usage

1. Clone the repo `git clone https://github.com/Alcha/Dobby.git` and execute `npm install`. 
2. Update the [config.json](https://github.com/Alcha/Dobby/blob/master/util/config.json) file with your personal token.
   - If you aren't sure how to obtain your own token, try finding a guide on Google. At the time of creating this README, [this url](https://github.com/TheRacingLion/Discord-SelfBot/wiki/Discord-Token-Tutorial) on Github has instructions that work just fine.
3. Lastly, fire up the bot with `npm start` and verify it works by typinig in an error such as `This wrok is complete!`

## TODO:

- [] Add ability to include your own words to the list straight from Discord
- [] List available corrections
