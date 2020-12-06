const { MessageEmbed, Client, Collection } = require("discord.js");

module.exports = {
  names: ["yardım"],
  ownerOnly: false,

  async exec(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Komutlar:')
    .addField('Yetkili', '[`sunucu-davet`](https://i.imgur.com/FfUianh.png)\nBotun eklendiği bütün sunucuların davet linkini gönderir.\n[`eval`](https://i.imgur.com/quyy5DK.png)\nBota eklenmesi gereken komutları denemek için bir yer sunar, sadece bot sahibi kullanabilir.', true)
    .addField('Biraz', '[`yardım`](https://i.imgur.com/0b4jJg9.png)\nBot hakkında ki bilgileri ve komutları gönderir ek [destek](https://discord.gg/hgh7qgZ) için gelebilirsin.\n[`uptime`](https://i.imgur.com/8UXUV6B.png)\nBot\'un ne kadar süre açık kaldığı hakkında bilgi verir.', true);
    message.channel.send(embed)
  },
};