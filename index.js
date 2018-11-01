const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("Discord Community", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)
 
bot.on("message", (message) => {
if(message.content === "-help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📭")
message.author.send("Please specify a module that you would like to look up:\n\n Powered By ``ModdingTwinz#4560``")
}
});
