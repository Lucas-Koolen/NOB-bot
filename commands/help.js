const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        var text = "**__Nob Squad__** \n\n __Commands__ \n ?hello - get a message from the bot \n ?stats - see the server stats \n ?invite - get invite link for a friend \n\n **Bot is still in development** more things will be added soon";

        message.author.send(text);

        message.channel.send("Send DM message.")

    } catch (error) {
        message.channel.send("Bot has an error. Try agian later.");
    }
 

}

module.exports.help = {
    name: "help"
}