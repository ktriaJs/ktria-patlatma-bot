const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("**Ktria Spam Guard Devre Dışı Bırakıldı ☑️**")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ktriaspam"],
  permLevel: 0
};

exports.help = {
  name: "spamguardoff",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "spamguardoff"
};