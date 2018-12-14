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

bot.on('message', function (message) {
  if (message.content === prefix + 'anais') {
    message.reply('Anaïs la lumière AGF douce et sauvage la guerrière AGF')
  }
});


bot.on('message', function (message) {
  if (message.content === prefix + 'kaz') {
    message.reply('Kazkyll le Maitre incontestable du plus grand record AGF ;)')
  }
});

bot.on('message', function (message) {
  if (message.content === prefix + 'Demon') {
    message.reply('Démon le capitaine sans peur et sans reproche pfffff    le POETE oui et du dimanche Ha Ha hahahahahahaha')
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
    if (msg.content.toLowerCase().startsWith(prefix + "Conchita")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

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



// parametrage du message du salon d'admission

bot.on('message', function (message) {
  if (message.content === prefix + 'AdmissionNew') {
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

// parametrage du reglement

bot.on('message', function (message) {
  if (message.content === (prefix + 'reglement') ) {
    message.channel.send('.')
    message.channel.send('.')
    message.channel.send('.')
    message.channel.send('**------------------------------------------------**')
    message.channel.send('**VERSION FRANCAISE DU REGLEMENT**    "english version further down"')
    message.channel.send('**------------------------------------------------**')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 1 : LANGUE**')
    message.channel.send('.')
    message.channel.send('Les escouades AGF ★ A Ghost French sont francophone.')
    message.channel.send('Tout le monde est bienvenu mais ici on parle essentiellement en français.')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 2 : ACTIVITE**')
    message.channel.send('.')
    message.channel.send('On attend des membres qu’ils soient actifs dans la communication interne.')
    message.channel.send('Un bonjour sur le chat du jeu est toujours le bienvenu.')
    message.channel.send('Une participation au chat Discord est encore mieux.')
    message.channel.send('L atteinte des objectifs est obligatoire pour rester dans la team élite compétition AGF1.')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 3 : OPERATION MONDIALE**')
    message.channel.send('.')
    message.channel.send('Nous cherchons à classer l’escouade le mieux possible en opération mondiale.')
    message.channel.send('Chaque recrue doit obtenir un score minimum chaque semaine, lequel est défini en annexe ci-dessous.')
    message.channel.send('Nous éliminons de l’escouade les recrues qui n’atteignent pas cet objectif sur les bases suivantes :')
    message.channel.send('-    Mercredi midi : 1/3 des points')
    message.channel.send('-    Vendredi soir : 2/3 des points')
    message.channel.send('-    Fin de l’opération mondiale le dimanche : totalité des points')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 4 : PVP**')
    message.channel.send('')
    message.channel.send('Nous cherchons à classer l’escouade le mieux possible en pvp également.')
    message.channel.send('Chaque recrue doit obtenir un score minimum chaque semaine, lequel est défini en annexe ci-dessous.')
    message.channel.send('Nous éliminons de l’escouade les recrues qui n’atteignent pas cet objectif sur les bases suivantes :')
    message.channel.send('-    Mercredi midi : 1/3 des points')
    message.channel.send('-    Vendredi soir : 2/3 des points')
    message.channel.send('-    Fin de l’événement pvp le samedi : totalité des points')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 5 : SPECIALISATION**')
    message.channel.send('.')
    message.channel.send('La spécialisation de base de la team est l’OP.')
    message.channel.send('Pour en venir au Pvp celui-ci reste du niveau du mérite.')
    message.channel.send('Les joueurs qui atteindront les objectifs de pallier pourront participer au premier Pvp et ceux qui atteindront les suivant pourront participer au deuxième Pvp.')
    message.channel.send('Des objectifs seront mis pour chaque escouades, ceux qui les atteindront pourront intégrer la team Pvp sur le duel concerné.')
    message.channel.send('Ils seront intégrés par le capitaine de la team Pvp')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 6 : OFFICIERS**')
    message.channel.send('.')
    message.channel.send('Les officiers ont pour mission de prendre ensemble les décisions concernant le fonctionnement de l’escouade.')
    message.channel.send('Ils se chargent aussi de l’élimination des recrues qui n’atteignent pas les objectifs fixés aux articles 3 et 4.')
    message.channel.send('Devenir officier de l’escouade est essentiellement une question d’implication dans la vie de l’escouade.')
    message.channel.send('La décision de promotion (ou de dégradation) est prise par le collège d’officiers en place et exécutée par le Capitaine.')
    message.channel.send('Les capitaines et les officiers doivent se conformer aux directives des Sages')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 7 : REVISION DES OBJECTIFS**')
    message.channel.send('.')
    message.channel.send('Dans le cadre de la démarche de progression de l’escouade, les objectifs fixés en annexe du règlement peuvent être révisés par le collège d’officiers, chaque semaine.')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 8 : RETRAITE TEMPORAIRE**')
    message.channel.send('.')
    message.channel.send('Les membres de l’escouade qui décident de faire une pause temporaire dans le jeu,')
    message.channel.send('pour cause de vacances, de surcharge de travail ou pour toute autre raison,')
    message.channel.send('et qui ne sont donc pas en mesure d’atteindre les objectifs hebdomadaires visés en annexe,')
    message.channel.send('sont invités à se transférer dans l’escouade AGF3 ☆ A Ghost French.')
    message.channel.send('Cette escouade a notamment pour fonction d’accueillir les membres qui sont "en pause" et les débutants du jeu.')
    message.channel.send('Tout membre transféré sur AGF3 ☆ A Ghost French peut, sur simple demande et sans condition particulière, rejoindre son escouade d’origine.')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 9 : PSEUDO**')
    message.channel.send('.')
    message.channel.send('Les membres de l’escouade doivent à ajouter le tag : AGF ★ avant leur pseudo dans le jeu, avec un espace avant et après l’étoile.')
    message.channel.send('Exemple : "AGF ★ DeuxSabres".')
    message.channel.send('Veillez faire un copier coller de Discord vers le jeu car vous ne pouvez changer de pseudo qu’une seul fois par semaine.')
    message.channel.send('Ce qui ne respecteront pas cette règle pourront se voir sortir d’une escouade pour cause de non identification.')
    message.channel.send('Sur Discord Votre pseudo doit être précédé de votre numéro d’escouade.')
    message.channel.send('Exemple : " 1 DeuxSabres " (pour AGF1).')
    message.channel.send('.')
    message.channel.send('**★ ARTICLE 10 : SAGES**')
    message.channel.send('.')
    message.channel.send('Les sages sont les fondateurs des AGF et leurs héritiers, ils ont tous pouvoir de décision et de gestion autant sur Discord que dans le jeu.')
    message.channel.send('.')
    message.channel.send('**---------------------------------------------**')
    message.channel.send('**ENGLISH VERSION OF REGULATION**')
    message.channel.send('**---------------------------------------------**')
    message.channel.send('.')
    message.channel.send('.')
    message.channel.send('.')
    message.channel.send('.')



  }
});





bot.login(process.env.TOKEN);
