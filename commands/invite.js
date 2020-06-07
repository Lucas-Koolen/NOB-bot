const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        var text = "**__Nob Squad Invitelink__** \n\n https://discord.gg/tmqRu3m";

        message.author.send(text);

        message.channel.send("Send DM message.")

    } catch (error) {
        message.channel.send("Bot has an error. Try agian later.");
    }
 

}

module.exports.help = {
    name: "invite"
}