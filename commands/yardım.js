const { MessageEmbed, Client, Collection } = require("discord.js");

module.exports = {
  names: ["yardım"],
  ownerOnly: false,

  async exec(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Komutlar:')
    .addField('Yetkili', '[`sunucu-davet`](https://i.imgur.com/FfUianh.png)\nBotun eklendiği bütün sunucuların davet linkini gönderir.\n[`eval`](https://i.imgur.com/quyy5DK.png)\nBota eklenmesi gereken komutları denemek için bir yer sunar, sadece bot sahibi kullanabilir.')
    .addField('Biraz:', '');
    message.channel.send(embed)
  },
};