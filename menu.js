const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.channels.get("644269853187899426").send('Bite');
});

bot.on("message", function(message) {
    if (message.content === 'spam') {
        message.channel.send('My Message')
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

bot.on("message", function(message) {
    if (message.content === '!nouvellesaison') {
        message.channel.send('Une nouvelle saison(epique) va bientot commencer.')
        await sleep(3000)
        message.channel.send("Tout d'abord, voici le cast:")
        ncast = getRandomInt(10,20)
        await sleep(3000)
        message.channel.send("Le cast sera compose de", ncast, "personnes.")
       }
});

bot.login(process.env.TOKEN);
