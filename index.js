const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("Discord Community", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)
 
bot.on("message", (message) => {
if(message.content === "kick") { 
if(!message.member.roles.some(r=>["EXECUTIVE", "DISCORD MODERATOR", " DICORD ADMINISTRATOR", "DISCORD HELPER"].includes(r.name)) ) if(message.member.id !== config.ownerID) return message.channel.send("🚫 Only Staff Members can kick other Users!") 
let toKick = message.mentions.members.first() ||message.guild.members.get(args[0]); 
if(!toKick) return message.channel.send("🚫 Invalid User"); if(!toKick.kickable) return message.channel.send("🚫 Couldn't kick " + `${toKick.user.tag}`); 
if(toKick.id === config.ownerID) return message.channel.send("🚫 The Bot Developer can't be kicked"); 
let reason = args.slice(1).join(' '); 
if(!reason) reason = "No reason provided"; await toKick.kick(reason) .catch(error => message.channel.send(`${error}`)); 
const kickEmbed = new Discord.RichEmbed() 
.setAuthor("Synotic Apps LLC.", client.user.avatarURL) 
.setColor(rainbowhex) 
.addField("Kicked User", toKick.user.tag) 
.addField("Kicked by", message.author.tag) 
.addField("Reason", reason)
message.channel.send(kickEmbed);
}
});

bot.on("message", (message) => {
if(message.content === "-help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📭")
message.author.send("Please specify a module that you would like to look up:\n\n Powered By ``ModdingTwinz#4560``")
}
});
