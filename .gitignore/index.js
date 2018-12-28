
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefixA = "???";

//----------------------------------------------------------------------------------------------------------------------
// Ajout des variable des salons

client.on('ready', () => {  
  
    var barfrancophone = client.channels.get("513664902469124098") // Replace with known channel ID
    // barfrancophone.send("Bienvenu au bar des AGF")
    var baranglophone = client.channels.get("515530036082638859") // Replace with known channel ID
    var barpublic = client.channels.get("513669474814001173") // Replace with known channel ID
    // barpublic.send("Bienvenu au bar Public des AGF")
    var admission = client.channels.get("509473089277657100") // Replace with known channel ID
      
})

//-----------------------------------------------------------------------------------------------------------------------
// Ajout piece joint ou image a un salon

client.on('ready', () => {
      
    // Provide a path to a local file
    // const localFileAttachment = new Discord.Attachment('D:\\logo.png')
    // admission.send(localFileAttachment)

    // Provide a URL to a file
    const webAttachmentlogoagf = new Discord.Attachment('https://drive.google.com/file/d/17BZjvLnftvnjdyWfB6z0RzqnsfxasrOq/view?usp=sharing')
    //generalChannel.send(webAttachment)
})




bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

// parametrage de la commande help pour administrateurs

bot.on('message', function (message) {
  if (message.content === (prefixA + 'help') ) {
    message.channel.send('La commande ???help vous sert à connaitre les actions que Conchita peut faire.\n???ping vous sert à tester si Conchita fonctionne.\n???01 vous informe que la dernière version validé de Assassin Sniper 3D pour IOS.\n???02 vous informe que la dernière version validé de Assassin Sniper 3D pour Android.\nLa commande ???101 efface 5 messages.\nLa commande ???102 efface 10 messages.\nLa commande ???03 permet de remettre le texte du salon Admission après un nettoyage à n’utiliser **que dans le salon admission svp !!!**.')


  }
});

// parametrage de la commande help pour joueur --faudra optimiser avec \n a la fin

//bot.on('message', function (message) {
  //if (message.content === (prefixJ + 'help') ) {
    //message.channel.send('La commande ???help vous sert à connaitre les actions que Conchita peut faire. ')
    //message.channel.send('La commande ???ping vous sert à tester si Conchita fonctionne. ')
    //message.channel.send('La commande ???01 vous informe que la dernière version validé de Assassin Sniper 3D pour IOS. ')
    //message.channel.send('La commande ???02 vous informe que la dernière version validé de Assassin Sniper 3D pour Android. ')
    //message.channel.send('La commande ???101 efface 5 messages. ')
    //message.channel.send('La commande ???102 efface 10 messages. ')

  //}
//});



//  parametre de test de Conchita


bot.on('message', msg => {
  if (msg.content === prefixA + 'ping') {
    msg.reply('pong');
  }
});


//  parametre des version validé des OS du jeu

bot.on('message', function (message) {
  if (message.content === prefixA + '01') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validée de Assassin Sniper 3D pour Android est la 2.16.15')
  }
});

bot.on('message', function (message) {
  if (message.content === prefixA + '02') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validée de Assassin Sniper 3D pour IOS est la 2.21.3')
  }
});

//Script de suppression des messages


bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "101")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 5});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "102")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 10});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "efface")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});
//------------------------------------------------------------------------------------------------------
bot.on('message', function (message) {
  if (message.content === prefixA + '03') {
    admission.send(webAttachmentlogoagf)
    admission.send('\n\n\n')
    admission.send('\n\n\n-**Bienvenue chez Ghost French !**-\n\n\nVous vous trouvez dans un salon d’accueil destiné à l’intégration des nouveaux venus.\nSi vous êtes un visiteur d’une autre escouade venu faire connaissance, déplacez-vous dans le salon Place publique,\nqui vous est destiné, et laissez un "bonjour", ce qui nous permettra de remarquer votre présence et venir papoter avec vous.\nSi vous êtes postulant ou déjà membre de AGF ★ A Ghost French, vous êtes au bon endroit.\nPour le moment vous ne pouvez lire et écrire des messages qu’ici, mais dès que vous aurez signalé votre présence par un "bonjour" ou même une courte présentation, un officier de l’escouade vous donnera le statut de Rookie et vous pourrez explorer les autres salons et discuter avec tout le monde.\nLa langue parlée ici est le français mais nous avons quelques anglophones.\nS’il vous plait, faites en sorte que votre PSEUDO ici corresponde à celui que vous utilisez sur le JEU.\nConseil : désactivez les notifications de Discord sur votre appareil si vous ne voulez pas qu’elles viennent vous déranger en plein match PVP.\nAttention : tous les messages déposés dans ce salon sont destinés à être supprimés dès que l’admission sera terminée.\n\n\n----------------------------------------------\nAGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF\n----------------------------------------------\n\n\n-**Welcome to Ghost French!**-\n\n\nYou are in a reception lounge for the integration of newcomers.\nIf you are a visitor from another squad, move to the Place publique chatroom, which is dedicated to you, and leave a "hello",\nwhich will allow us to notice your presence and come for a chat with you.\nIf you are an applicant or already member of AGF ★ A Ghost French,you are in the right place..\nAt the moment you can read and write messages only here but as soon as you have reported your presence by a "hello" or even a short presentation if you are a candidate,')
    admission.send('a squad officer will give you the status of member and you can explore other channels and chat with everyone..\nThe language spoken here is French but we have some English speakers. Please make sure your username here matches the one you use in game..\nTip: Turn off Discord notifications on your device if you do not want them to bother you in the middle of a pvp match.\nWarning: all messages posted in this channel are intended to be deleted as soon as admission is complete.\n\n\n')
   
  }
});










bot.login(process.env.TOKEN);
