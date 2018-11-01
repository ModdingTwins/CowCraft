const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
 if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.login('NTA2ODQ4NDc1NTM1NzY5NjAy.DrvtXg.WFGbPSYwBlx4C7Ztlmi2hO4hfXw');
