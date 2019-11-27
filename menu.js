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
        setTimeout(function(){
            message.channel.send("Tout d'abord, voici le cast:")
        }, 3000);
        ncast = getRandomInt(10,20)
        setTimeout(function(){
            message.channel.send("Le cast sera compose de", ncast, "personnes.")
        }, 3000);
       }
});
