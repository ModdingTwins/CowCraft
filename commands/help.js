const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  if 
    (message.content.indexOf(process.env.PREFIX) !== 0) return;
   
   message.channel.send("Help")
   }
   }
module.exports.help = {
 name: "help"
 }
