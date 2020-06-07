const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("hi :smiley:");   	


}


module.exports.help = {
    name: "hello"
}