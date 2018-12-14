// pm2 start app.js

// pm2 start index.js -i max # Enable load-balancer and cluster features

// pm2 reload all           # Reload all apps in 0s manner

// pm2 flush          # Clear all the logs

// pm2 monit

// pm2 describe 0 # To have more details on a specific process

// pm2 stop <app_name|id|all>
// pm2 restart  <app_name|id|all>
// pm2 delete   <app_name|id|all>

//pm2 list Listing all running processes

// pm2 save       To save a process list just do


process.setMaxListeners(0);

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "*";

//if (process._maxListeners)
  //  process.setMaxListeners(process._maxListeners + 1);


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pong');
  }
});


//  parametre des version validé des OS du jeu

bot.on('message', function (message) {
  if (message.content === prefix + 'Android') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour Android est la 2.16.15')
  }
});

bot.on('message', function (message) {
  if (message.content === prefix + 'android') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour Android est la 2.16.15')
  }
});


bot.on('message', function (message) {
  if (message.content === prefix + 'IOS') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour IOS est la 2.20.1')
  }
});

bot.on('message', function (message) {
  if (message.content === prefix + 'ios') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour IOS est la 2.20.1')
  }
});

//Script de suppression des messages


bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefix + "supchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

// parametrage de la commande hel ou HELP

bot.on('message', function (message) {
  if (message.content === (prefix + 'HELP') ) {
    message.channel.send('La commande *help ou  *HELP vous sert à connaitre les actions que Conchita peut faire. ')
    message.channel.send('La commande *IOS ou *ios vous informe que la dernière version validé de Assassin Sniper 3D pour IOS. ')
    message.channel.send('La commande *Android ou *android vous informe que la dernière version validé de Assassin Sniper 3D pour Android. ')
    message.channel.send('*AdmissionNew permet de remettre le texte du salon Admission après un nettoyage a n utiliser que dans le salon admission svp !!!.  ')
  }
});

bot.on('message', function (message) {
  if (message.content === (prefix + 'help') ) {
    message.channel.send('La commande *help vous sert à connaitre les actions que Conchita peut faire. ')
    message.channel.send('La commande *ping vous sert à tester si Conchita fonctionne. ')
    message.channel.send('La commande *ios vous informe que la dernière version validé de Assassin Sniper 3D pour IOS. ')
    message.channel.send('La commande *android vous informe que la dernière version validé de Assassin Sniper 3D pour Android. ')
    message.channel.send('La commande *supchat vous sert à effacer completement un salon (100 message à la fois seulemnt). **ATTENTION** ')
    message.channel.send('La commande *AdmissionNew permet de remettre le texte du salon Admission après un nettoyage à n’utiliser **que dans le salon admission svp !!!**.  ')

  }
});








bot.login(process.env.TOKEN);
