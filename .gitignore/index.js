
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefixA = "*";
//const prefixJ = "?";


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

// parametrage de la commande help pour administrateurs

bot.on('message', function (message) {
  if (message.content === (prefixA + 'help') ) {
    message.channel.send('La commande *help vous sert à connaitre les actions que Conchita peut faire.\nLa commande *ping vous sert à tester si Conchita fonctionne.\nLa commande *ios vous informe que la dernière version validée de Assassin Sniper 3D pour IOS.\nLa commande *android vous informe que la dernière version validée de Assassin Sniper 3D pour Android.\nLa commande *AdmissionNew permet de remettre le texte du salon Admission après un nettoyage à n’utiliser **que dans le salon admission svp !!!**.')


  }
});

// parametrage de la commande help pour joueur

//bot.on('message', function (message) {
  //if (message.content === (prefixJ + 'help') ) {
    //message.channel.send('La commande ?help vous sert à connaitre les actions que Conchita peut faire. ')
    //message.channel.send('La commande ?ping vous sert à tester si Conchita fonctionne. ')
    //message.channel.send('La commande ?ios vous informe que la dernière version validé de Assassin Sniper 3D pour IOS. ')
    //message.channel.send('La commande ?android vous informe que la dernière version validé de Assassin Sniper 3D pour Android. ')

  //}
//});



//  parametre de test de Conchita


bot.on('message', msg => {
  if (msg.content === prefixA + 'ping') {
    msg.reply('pong');
  }
});

//bot.on('message', msg => {
  //if (msg.content === prefixJ + 'ping') {
   // msg.reply('pong');
 // }
//});



//  parametre des version validé des OS du jeu

bot.on('message', function (message) {
  if (message.content === prefixA + 'android') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour Android est la 2.16.15')
  }
});

//bot.on('message', function (message) {
  //if (message.content === prefixJ + 'android') {
    //message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour Android est la 2.16.15')
 // }
//});


bot.on('message', function (message) {
  if (message.content === prefixA + 'ios') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour IOS est la 2.21.3')
  }
});

//bot.on('message', function (message) {
 // if (message.content === prefixJ + 'ios') {
    //message.reply('Le testeur officiel AGF vous informe que la dernière version validé de Assassin Sniper 3D pour IOS est la 2.22.3')
 // }
//});

//Script de suppression des messages


bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "supchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

bot.on('message', function (message) {
  if (message.content === prefixA + 'AdmissionNew') {
    message.channel.send('**')
    message.channel.send('**')
    message.channel.send('**')
    message.channel.send('**Bienvenue chez Ghost French !**')
    message.channel.send('**')
    message.channel.send('Vous vous trouvez dans un salon d accueil destiné à l intégration des nouveaux venus.')
    message.channel.send('Si vous êtes un visiteur d une autre escouade venu faire connaissance, déplacez-vous dans le salon Place publique,')
    message.channel.send('qui vous est destiné, et laissez un "bonjour", ce qui nous permettra de remarquer votre présence et venir papoter avec vous.')
    message.channel.send('Si vous êtes postulant ou déjà membre de AGF ★ A Ghost French, vous êtes au bon endroit.')
    message.channel.send('Pour le moment vous ne pouvez lire et écrire des messages qu ici mais dès que vous aurez signalé votre présence par un "bonjour" ou même une courte présentation,')
    message.channel.send('un officier de l escouade vous donnera le statut de rookie et vous pourrez explorer les autres salons et discuter avec tout le monde.')
    message.channel.send('La langue parlée ici est le français mais nous avons quelques anglophones.')
     message.channel.send('S il vous plait, faites en sorte que votre PSEUDO ici corresponde à celui que vous utiliser en JEU.')
    message.channel.send('Conseil : désactivez les notifications de Discord sur votre appareil si vous ne voulez pas qu elles viennent vous déranger en plein match pvp.')
    message.channel.send('Attention : tous les messages déposés dans ce salon sont destinés à être supprimés dès que l admission sera terminée.')
    message.channel.send('----------------------------------------------')
    message.channel.send('AGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF')
    message.channel.send('----------------------------------------------')
    message.channel.send('**')
    message.channel.send('**Welcome to Ghost French!**')
    message.channel.send('**')
    message.channel.send('You are in a reception lounge for the integration of newcomers.')
    message.channel.send('If you are a visitor from another squad, move to the Place publique chatroom, which is dedicated to you, and leave a "hello",')
    message.channel.send('which will allow us to notice your presence and come for a chat with you.')
    message.channel.send('If you are an applicant or already member of AGF ★ A Ghost French,you are in the right place.')
    message.channel.send('At the moment you can read and write messages only here but as soon as you have reported your presence by a "hello" or even a short presentation if you are a candidate,')
    message.channel.send('a squad officer will give you the status of member and you can explore other channels and chat with everyone.')
    message.channel.send('The language spoken here is French but we have some English speakers. Please make sure your username here matches the one you use in game.')
    message.channel.send('Tip: Turn off Discord notifications on your device if you do not want them to bother you in the middle of a pvp match.')
    message.channel.send('Warning: all messages posted in this channel are intended to be deleted as soon as admission is complete.')
    message.channel.send('**')
    message.channel.send('**')
    message.channel.send('**')
  }
});










bot.login(process.env.TOKEN);
