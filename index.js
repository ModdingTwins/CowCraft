const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("Discord Community", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)

if(command === "kick") {
        if(!message.member.roles.some(r=>["FOUNDER", "APP/GAME DEVELOPER", "ADMINISTRATOR", "MODERATOR"].includes(r.name)) )
        if(message.member.id -== config.ownerID)
            return message.channel.send(":no_entry_sign: Only Staff Members can kick other Users!")

        let toKick = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!toKick)
            return message.channel.send(":no_entry_sign: Invalid User");
        if(!toKick.kickable)
            return message.channel.send(":no_entry_sign: Couldn't kick " + `${toKick.user.tag}`);
        if(toKick.id === config.ownerID)
            return message.channel.send(":no_entry_sign: The Bot Developer can't be kicked");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";

        await toKick.kick(reason)
            .catch(error => message.channel.send(`${error}`));
        
        const kickEmbed = new Discord.RichEmbed()
            .setAuthor("ModdingTwinz.", client.user.avatarURL)
            .setColor(rainbowhex)
            .addField("Kicked User", toKick.user.tag)
            .addField("Kicked by", message.author.tag)
            .addField("Reason", reason)
        message.channel.send(kickEmbed);
    }

bot.on("message", (message) => {
if(message.content === "-youtube") {
message.channel.send("YouTube.com/c/ModdingTwinz")
 }
 });
 
bot.on("message", (message) => {
if(message.content === "-discord") {
message.channel.send("https://discord.gg/u3vqvst")
}
});
 
bot.on("message", (message) => {
if(message.content === "-help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📪")
message.author.send("Please specify a module that you would like to look up:\n 1. -ip ``TwinFactions Server Ip & Port``\n 2. -youtube ``Subscribe To ModdingTwinz Channel``\n 3. -discord ``Join us on TwinFactions & Have Fun!``\n\n Powered By ``Discord``")
}
});
