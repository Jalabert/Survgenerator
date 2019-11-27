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

bot.on("message", function(message) {
    if (message.content === '!nouvellesaison') {
        message.channel.send('Une nouvelle saison(epique) va bientot commencer.')
    }
});

bot.login(process.env.TOKEN);

