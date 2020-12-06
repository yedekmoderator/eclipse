const Discord = require("discord.js");

module.exports = {
  names: ["uptime"],
  ownerOnly: false,

async exec(client, message, args) {

  message.delete().catch(O_o => {});
  
  
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} gün 🗓️ ${hours.toFixed()} saat 🗓️ ${minutes.toFixed()} dakika 🗓️ ${seconds.toFixed()} saniye`;

  message.channel.send(`${uptime}`);
  },
};