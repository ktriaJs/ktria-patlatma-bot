const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("**KEKEKEKKEKEEK ☑️**")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ktriaspam"],
  permLevel: 0
};

exports.help = {
  name: "ez",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "ez"
};