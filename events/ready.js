const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Ktria 🖤 Nickiniz",
        
        
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] komutlar yüklendi`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  ${client.user.username} ismi ile giriş yaptı`);
  client.user.setStatus("idle");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] footer ayarlandı`);
  
};