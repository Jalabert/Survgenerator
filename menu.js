const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.channels.get("644269853187899426").send('Bite');
});

bot.on("message", function(message) {
    message.channel.send('My Message')
});

bot.login(process.env.TOKEN);

