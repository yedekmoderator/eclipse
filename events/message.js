let prefix = process.env.PREFIX;

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return
  
  let mentionEx = new RegExp(`^<@!?${client.user.id}>`);
  
  prefix = message.content.match(mentionEx) || prefix;
  
  if (!message.content.startsWith(prefix) || !prefix) return;

  const [command, ...args] = message.content.slice(prefix[0] ? prefix[0].length : prefix.length).trim().split(/ +/g);

  const cmd = client.commands.find(c => c.names && c.names.includes(command.toLowerCase()));

  if (!cmd) return;

  if (cmd.ownerOnly && message.author.id !== process.env.OWNER_ID) return;
  
  try {
    cmd.exec(client, message, args);
  } catch (e) {
    console.error(`komutOkuyucuHatası (${cmd.names[0]}): ${e}`);
    message.reply('beklenmedik bir hata oluştu.');
  }
};