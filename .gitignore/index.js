
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefixA = "<!>";


//----------------------------------------------------------------------------------------------------------------------
// Ajout des variable des salons

//var admission = bot.channels.get("509473089277657100")
//var barpublic = bot.channels.get("513669474814001173")
//var barfrancophone = bot.channels.get("513664902469124098")
//var baranglophone = bot.channels.get("515530036082638859")

//---------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------
// Ajout piece joint ou image a un salon

    // const localFileAttachment = new Discord.Attachment('D:\\logo.png')
    // admission.send(localFileAttachment)

    // Provide a URL to a file
    const webAttachmentlogoagf = new Discord.Attachment('https://hqgwvw.am.files.1drv.com/y4mx2aRCQ4MCfRPqsuornAB2sOOkXcd6b4UgjhPfsYXcp8HRKzC9CYbUyx2pnUytAfSiNCpx2O22VbyMrDwdig87LOGfNTINscwrez9Y01rxLfh_flUYGG-Xc964a5leEvuKHVwseRB03I5F0dYzhPb2mhJMZRVnooGoRs-sJppfytFU2garc3A8ed807C6H30EPnVto_FCerbDQQTZqlVSFw')
    //generalChannel.send(webAttachment)
    
    
//----------------------------------------------------------------------------------------------------------------------
    

//-----------------------------------------------------------------------------------------------------------------------
// Affichage du bot

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

//-------------------------------------------------------------------------------------------------------------------------
// parametrage de la commande help pour administrateurs

bot.on('message', function (message) {
  if (message.content === (prefixA + 'mod') ) {
    message.channel.send('Prefix+**help** Vous sert à connaitre les actions que Conchita peut faire.\nPrefix+**ping** Vous sert à tester si Conchita fonctionne.\nPrefix+**01** Vous informe que la dernière version validée de Assassin Sniper 3D pour iOS.\nPrefix+**02** Vous informe que la dernière version validée de Assassin Sniper 3D pour Android.\nPrefix+**03** Vous informe des versions non validées de Assassin Sniper 3D pour Android.\nPrefix+**04** Permet de remettre le texte du salon Admission après un nettoyage.\nPrefix+**05** Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (FR).\nPrefix+**06** Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (EN).\nPrefix+**07** Message Privé envoyé au Rookie récemment promu au rôle de Membre (FR)\nPrefix+**08** Message Privé envoyé au Rookie récemment promu au rôle de Membre (EN)\nPrefix+**AAA** Message Privé envoyé au Membre récemment promu au rôle d’Officier (FR)\nPrefix+**AAB** Message Privé envoyé au Membre récemment promu au rôle d’Officier (EN)\nPrefix+**efface5** efface 5 messages.\nPrefix+**efface10** efface 10 messages.')

  }
});

// parametrage de la commande help pour Officiers

bot.on('message', function (message) {
  if (message.content === (prefixA + 'help') ) {
    message.channel.send('Prefix+**help** Vous sert à connaitre les actions que Conchita peut faire.\nPrefix+**ping** Vous sert à tester si Conchita fonctionne.\nPrefix+**01** Vous informe que la dernière version validée de Assassin Sniper 3D pour iOS.\nPrefix+**02** Vous informe que la dernière version validée de Assassin Sniper 3D pour Android.\nPrefix+**03** Vous informe des versions non validées de Assassin Sniper 3D pour Android.\nPrefix+**04** Permet de remettre le texte du salon Admission après un nettoyage.\nPrefix+**05** Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (FR).\nPrefix+**06** Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (EN).\nPrefix+**07** Message Privé envoyé au Rookie récemment promu au rôle de Membre (FR)\nPrefix+**08** Message Privé envoyé au Rookie récemment promu au rôle de Membre (EN)')

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


//------------------------------------------------------------------------------------------------------------------------
//  parametre de test de Conchita


bot.on('message', msg => {
  if (msg.content === prefixA + 'ping') {
    msg.reply('pong');
  }
});

//----------------------------------------------------------------------------------------------------------------------
//  parametre des version validé des OS du jeu

bot.on('message', function (message) {
  if (message.content === prefixA + '01') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validée de Assassin Sniper 3D pour iOS est la 2.21.9')
  }
});

bot.on('message', function (message) {
  if (message.content === prefixA + '02') {
    message.reply('Le testeur officiel AGF vous informe que la dernière version validée de Assassin Sniper 3D pour Android est la 2.16.22')
  }
});

//----------------------------------------------------------------------------------------------------------------------
//  parametre des version non validé des OS du jeu

bot.on('message', function (message) {
  if (message.content === prefixA + '03') {
    message.reply('Le testeur officiel AGF vous informe que les versions suivantes pour Android: 2.16.16 - 2.16.17 - 2.16.18 sont non validées et comportent des bugs')
  }
});


//---------------------------------------------------------------------------------------------------------------------------
//Script de suppression des messages


bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "efface5")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 5});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "efface10")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 10});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefixA + "effaceTout")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99}); 
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});


//------------------------------------------------------------------------------------------------------
// Message de l'admission
bot.on('message', function (message) {
  if (message.content === prefixA + '04') {
    var admission = bot.channels.get("509473089277657100")
    admission.send('\n\n\n')
    admission.send('\n\n\n-**Bienvenue chez Ghost French !**-\n\n\nVous vous trouvez dans un salon d’accueil destiné à l’intégration des nouveaux venus.\nSi vous êtes un visiteur d’une autre escouade venu faire connaissance, déplacez-vous dans le salon Place publique,\nqui vous est destiné, et laissez un "bonjour", ce qui nous permettra de remarquer votre présence et venir papoter avec vous.\nSi vous êtes postulant ou déjà membre de AGF ★ A Ghost French, vous êtes au bon endroit.\nPour le moment vous ne pouvez lire et écrire des messages qu’ici, mais dès que vous aurez signalé votre présence par un "bonjour" ou même une courte présentation, un officier de l’escouade vous donnera le statut de Rookie et vous pourrez explorer les autres salons et discuter avec tout le monde.\nLa langue parlée ici est le français mais nous avons quelques anglophones.\nS’il vous plait, faites en sorte que votre PSEUDO ici corresponde à celui que vous utilisez sur le JEU.\nConseil : désactivez les notifications de Discord sur votre appareil si vous ne voulez pas qu’elles viennent vous déranger en plein match PVP.\nAttention : tous les messages déposés dans ce salon sont destinés à être supprimés dès que l’admission sera terminée.\n\n\n----------------------------------------------\nAGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF**AGF\n----------------------------------------------\n\n\n-**Welcome to Ghost French!**-\n\n\nYou are in a reception lounge for the integration of newcomers.\nIf you are a visitor from another squad, move to the Place publique chatroom, which is dedicated to you, and leave a "hello",\nwhich will allow us to notice your presence and come for a chat with you.\nIf you are an applicant or already member of AGF ★ A Ghost French,you are in the right place..\nAt the moment you can read and write messages only here but as soon as you have reported your presence by a "hello" or even a short presentation if you are a candidate,')
    admission.send('a squad officer will give you the status of member and you can explore other channels and chat with everyone..\nThe language spoken here is French but we have some English speakers. Please make sure your username here matches the one you use in game..\nTip: Turn off Discord notifications on your device if you do not want them to bother you in the middle of a pvp match.\nWarning: all messages posted in this channel are intended to be deleted as soon as admission is complete.\n\n\n')
     }
});

//------------------------------------------------------------------------------------------------------------
// Test
//bot.on('message', msg => {
 // if (msg.content === prefixA + 'test') {
    //var admission = bot.channels.get("509473089277657100")
    //admission.send('pong-ping-pong');
      //admission.send(webAttachmentlogoagf)
  //}
//});

//-----------------------------------------------------------------------------------------------------------------
// Messages utiles

//Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (FR)

bot.on('message', function (message) {
  if (message.content === prefixA + '05') {
    var admission = bot.channels.get("509473089277657100")
    
 //   admission.send('Notre serveur de chat Discord comporte plusieurs salons. Tu apprendras très vite à les identifier.\n\n**-    Admissions :** c’est là que tu te trouves. Ce salon ne sert qu’aux admissions, on ne va pas y rester. Ce salon disparaitra une fois que tu en seras sorti.\n**-    Bar public :** c’est là qu’on bavarde avec les joueurs en visite des autres escouades.\n\nLes autres salons sont réservés aux membres, comme toi :\n\n**-    Messages importants :** c’est là que sont regroupés tous les messages importants publiés sur les différents salons du serveur afin que tu puisses les retrouver et les consulter rapidement \n     et régulièrement\n**-    Règlement intérieur :** on y trouve les règles de l’escouade.\n**-    Bar francophone :** c’est là qu’on papote, beaucoup, sans doute trop.\n**-    Irish Pub :** la même chose mais pour les anglophones\n**-    Division 1, 2 ou 3 :** tu n’auras qu’un de ces salons, celui qui correspond à la division dans laquelle tu auras été affectée.\n     C’est ici que les capitaines donnent les informations importantes (objectifs, OP, etc.)\n**-    Division PVP :** Ce salon te sera ouvert si tu intègres la division PVP et que tu participes donc à la battle en cours. Une fois la battle terminée, le salon sera de nouveau fermé jusqu’au prochain PVP\n**-    Mises à jour iOS :** tu y trouveras la dernière mise à jour iOS validée par l’équipe. Nous te conseillons vivement de ne pas télécharger de version non validée afin de t’éviter tout problème dans le jeu\n**-    Mises à jour Android :** tu y trouveras la dernière mise à jour Android validée par l’équipe.\n     Nous te conseillons vivement de ne pas télécharger de version non validée afin de t’éviter tout problème dans le jeu\n**-    Forum mises à jour :** un endroit où tu peux poser des questions sur les différentes versions du jeu et les mises à jour\n**-    Conseils villes :** tu y trouveras des conseils pour finir tes villes rapidement.\n\n\nCommence par lire le règlement et on se retrouve au Bar francophone.')
 //    }
//});
	admission.send('Notre serveur de chat Discord comporte plusieurs salons. Tu apprendras très vite à les identifier.\n\n**-    Admissions :** c’est là que tu te trouves. Ce salon ne sert qu’aux admissions, on ne va pas y rester. Ce salon disparaitra une fois que tu en seras sorti.\n**-    Bar public :** c’est là qu’on bavarde avec les joueurs en visite des autres escouades.\n\nLes autres salons sont réservés aux membres, comme toi :\n\n**-    Messages importants :** c’est là que sont regroupés tous les messages importants publiés sur les différents salons du serveur afin que tu puisses les retrouver et les consulter rapidement \n     et régulièrement\n**-    Règlement intérieur :** on y trouve les règles de l’escouade.\n**-    Bar francophone :** c’est là qu’on papote, beaucoup, sans doute trop.\n**-    Division 1 ou 2 :** C’est ici que les capitaines et officiers donnent les informations importantes (objectifs, OP, etc.) et qu’on partage les questions et conseils sur le jeu\n**-    Division repos :** pour prévenir lorsqu’on est en pause (pour vacances, surcharge de travail ou pour toute autre raison personnelle)\n**-    Mises à jour iOS :** tu y trouveras la dernière mise à jour iOS validée par l’équipe. Nous te conseillons vivement de ne pas télécharger de version non validée afin de t’éviter tout problème dans le jeu\n**-    Mises à jour Android :** tu y trouveras la dernière mise à jour Android validée par l’équipe.  Nous te conseillons vivement de ne pas télécharger de version non validée afin de t’éviter tout problème dans le jeu\n**-    Forum mises à jour :** un endroit où tu peux poser des questions sur les différentes versions du jeu et les mises à jour.\n**-    Besoin-de-diamants :** regroupe les infos et tutos afin de récupérer la récompense de l’équipe vainqueur du classement hebdomaire pvp (quand cela est possible).\n**-    Astuces - IOS ou Android :** infos et astuces sur les menus du jeu.\n**-    Divers :** infos pour l’utilisation de discord et autres\n**-    Champion de la semaine :** Chaque semaine, le joueur qui obtiendra le meilleur score OP se verra octroyé le titre de champion de la semaine et son score sera posté dans le salon\n\n\n Commence par lire le règlement et on se retrouve au Bar francophone.')
     }
});

//Message d’accueil d’un nouvel arrivant, promu au rôle de rookie (EN)

bot.on('message', function (message) {
  if (message.content === prefixA + '06') {
    var admission = bot.channels.get("509473089277657100")
    
    admission.send('Our Discord Chat Server has multiple rooms. You will learn very quickly to identify them.\n\n**-    Admissions :** that’s where we are now. This room is only for admissions, we will not stay there. This room will disappear once you will leave it.\n**-    Bar public :** this is where we chat with visiting people of other squads.\n\nThe others rooms are reserved for members, like you:\n\n**-    Messages importants :**This is where you will find important messages published on the different rooms of our server. The goal of this room is for you to find and read quickly these messages.\n**-    Règlement intérieur :** it contains the rules of the squad, both in French and English.\n**-    Bar francophone :** this is where we chat, much, probably too much, but in french.\n**-    Irish Pub :** the same thing but for Anglophones.\n**-    Division 1, 2 ou 3 :** you will have access to one of this room, which correspond to the division you have been affected. It’s here you will find important information given by your captain\n     (objectives, OP, etc.)\n**-    Division PVP :** This room will be open if you are invited in joining the PVP division for a battle. Once the battle is over, the room will be closed again, until the next battle.\n**-    Mises à jour iOS :** you will find the last iOS update validated by the team.\n**-    Mises à jour Android :** you will find the last Android update validated by the team.\n     We strongly recommend you to never upgrade your app if the version has not been validated by the team in the way to avoid you problems with the game.\n**-    Forum mises à jour :** a place where you can ask questions about the app and her updates.\n**-    Conseils villes :** Advices, tips, lots of useful things to progress and finish your cities.\n\n\nStart by reading the rules and we meet at the Irish Pub.')
     }
});

//Message Privé envoyé au Rookie récemment promu au rôle de Membre (FR)

bot.on('message', function (message) {
  if (message.content === prefixA + '07') {
    var admission = bot.channels.get("509473089277657100")
    
    admission.send('Tu viens d’être promu au rang de Membre. Félicitations !\nTu as désormais accès à de nouveaux salons :\n\n**-    Trombinoscope :** tu y trouveras les photos des membres de l’escouade. Tu es bien sûr invité(e) à y poster la tienne si tu le souhaites.\n**-    Vote des membres :** c’est ici que sont soumis les votes aux membres de l’équipe.\n**-    Conseils OP :**  tu y trouveras des conseils, astuces et pleins de choses pour progresser en l’OP.\n**-    Conseils PVP :** tu y trouveras des conseils, astuces et pleins de choses pour progresser en PVP.\n**-    Mémoriser la map :** tu y trouveras des screenshots de la map PVP montrant la plupart des emplacements.\n**-    iOS :** c’est ici que sont postées les astuces du jeu sous iOS.\n**-    Android :** c’est ici que sont postées les astuces du jeu sous Android.\n**-    Divers :** tu y trouveras une aide afin d’utiliser au mieux les fonctionnalités de Discord et du jeu.\n**-    Livre des records :** on y poste les screenshots de nos exploits et records.\n**-    Cinéma des AGF :** les vidéos qu’il nous arrive de partager.\n**-    Cuisine des AGF :** Les recettes de cuisine des snipers, eh oui.\n**-    Les bizarreries :** on y poste des screenshots de trucs bizarres.\n\n\nProchaine étape : Officier ! Si tu es sage.  :wink:')
     }
});

//Message Privé envoyé au Rookie récemment promu au rôle de Membre (EN)

bot.on('message', function (message) {
  if (message.content === prefixA + '08') {
    var admission = bot.channels.get("509473089277657100")
    
    admission.send('You have just been promoted to the rank of Member. Congratulations!\nYou now have access to new chatrooms:\n\n**-    Trombinoscope :** this is where members post their pictures. Of course, you are invited to post your pic, but this is not an obligation.\n**-    Vote des membres :** this is where votes are submitted to AGF members.\n**-    Conseils OP :**  Advices, tips, lots of useful things to progress in OP.\n**-    Conseils PVP :** Advices, tips, lots of useful things to progress in OP.\n**-    Mémoriser la map :** you will find screenshots of the PVP map to show you most of the snipers locations.\n**-    iOS :** this is where advices are published about the game on iOS.\n**-    Android :** this is where advices are published about the game on Android.\n**-    Divers :** you will find tips on using Discord and Sniper3D commands.\n**-    Livre des records :** members post her screenshots of theirs exploits and record.\n**-    Cinéma des AGF :** The videos that we happen to share.\n**-    Cuisine des AGF :** The cooking recipes of the snipers, yes.\n**-    Les bizarreries :** members post her screenshots of strange situations.\n\n\nNext step: Officer! If you are good.  :wink:')
     }
});












//-------------------------------
//Demarrage du bot

bot.login(process.env.TOKEN);
