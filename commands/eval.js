const { MessageEmbed } = require("discord.js");
const util = require('util');

async function clean(client, text) {
  if (text && text.constructor.name === 'Promise') text = await text;
  if (typeof text !== 'string') text = util.inspect(text, { depth: 1 });
  
  text = text
    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
    .replace(/@/g, `@${String.fromCharCode(8203)}`)
    .replace(client.token, 'NOT-TOKEN');
  
  return text;
};

module.exports = {
  names: ["eval", "e"],
  cooldown: 0,
  ownerOnly: true,
  async exec(client, message, args) {
    try {
      let evaled = eval(args.join(' '));
      let cleaned = await clean(client, evaled);
      message.channel.send(cleaned, { code: 'js' });
    } catch (e) {
      let cleaned = await clean(client, e);
      message.channel.send(cleaned, { code: 'xl' })
    }
  }
};
