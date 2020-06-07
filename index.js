const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

///lezen van losse commands
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Bro, kan deze files niet vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`)
        console.log(`De Nob file ${f} is aanwezig`);

        bot.commands.set(fileGet.help.name, fileGet);

    })
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("?help | NOB SQUAD", {type: "PLAYING"});

});

bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.tag + ' has joined the server!'); 

    var Newjoin = member.guild.channels.find(`name`, "new-nobs")
    
    var Newnobs = ("Welcome " + member.user + " to the server of the Nob-Squad!");

    Newjoin.send(Newnobs);

    return;
  });

bot.on("message", async message => {

    //bot stuurt bericht = geen antwoord
    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);
    

 
});
bot.login(process.env.token);