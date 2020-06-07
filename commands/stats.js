const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("server information ↓")
        .setColor("#751419")
        .setThumbnail(icon)
        .addField("Bot name:", bot.user.username)
        .addField("you are joined on:", message.member.joinedAt)
        .addField("number of members:", message.guild.memberCount);


    return message.channel.send(serverEmbed);
}


module.exports.help = {
    name: "stats"
}