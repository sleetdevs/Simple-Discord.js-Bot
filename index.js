const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
  client.user.setActivity("Sleet's Template Bot", { type: 'PLAYING' });
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content === '!hello') {
    message.channel.send(`Hello, ${message.author.username}!`);
  }
});

client.login(process.env.BOT_TOKEN); // Put your bot token in the .env
