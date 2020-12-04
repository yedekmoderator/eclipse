const { PROJECT_DOMAIN, PORT, TOKEN, HOOK_ID, HOOK_TOKEN } = process.env;

const { MessageEmbed, Client, WebhookClient } = require("discord.js");
const client = new Client();
const hook = new WebhookClient(HOOK_ID, HOOK_TOKEN);

const http = require("http");
const app = require("express")();
const moment = require('moment');
moment.locale('tr');

app.get("/", (req, res) => res.status(200).send("ok"));

setInterval(() => { 
  http.get(`http://${PROJECT_DOMAIN}.glitch.me/`);
}, 28e4);

client.on('ready', async () => console.log('READY!'));

client.on("guildMemberAdd", member => {
  let info = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(member.user.tag)
    .addField("> Kullanıcı ID", member.id)
    .addField("> Hesap Tarihi", [
      moment(member.user.createdTimestamp).format("LLLL"),
      moment(member.user.createdTimestamp).fromNow()
    ])
    .addField("> Giriş Tarihi", [
      moment(member.joinedTimestamp).format("LLLL")
    ])
    .setThumbnail(member.user.avatarURL({ size: 1024, dynamic: true }))
    .setTimestamp();

  member
    .send("Bu sunucu, belli bir __**proje**__ veya __**oyun**__ üzerine kurulan bir sunucu değildir, ***herkesin*** sohbet edebilmesi ve kendi yararına işler yapabiliceği, otantik ve hoş, genel de her şeyi kullanarak geliştirdiğimiz ve eğlendiğimiz bir topluluk.\n\nYeni sistem geldiğinden dolayı tanıtmak istiyorum biraz, sunucu da küfür etmek yasak değil ama sunucu üyelerine şaka dahi olsa 'terbiyesizlik', 'saygısızlık', 'küfür' etmek yasaktır, yeni bir emre kadar da sunucu da dini konular hakkında konuşmak yasaktır, yeni haberleri <#775715289685557298>den öğrenebilirsiniz. https://imgur.com/a/Nd1OtG7 :information_source: https://discord.gg/hgh7qgZ")
    .then(() => hook.send(info))
    .catch(console.log);
});

client.login(TOKEN);
app.listen(PORT);