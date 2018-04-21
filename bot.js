const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM2ODQ1NzgzNDEzODE3MzU1.Dbte1g.n8klczqLjyL_89aRzTCdgSuE-sU'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply('Pong!');
  }
});

client.login('NDM2ODQ1NzgzNDEzODE3MzU1.Dbte1g.n8klczqLjyL_89aRzTCdgSuE-sU');
