const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("Sunucu Patladı v2☑️")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ktriaspam"],
  permLevel: 0
};

exports.help = {
  name: "kspam",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "kpam"
};