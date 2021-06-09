//================================================
// Crée le: 09/06/2021
// Crée par: Kziiz#9999
// Serveur Discord: https://discord.gg/nF5vj4BhrH
//================================================

console.clear()
const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs');
const mkdirp = require('mkdirp');
var nitro = new Discord.Client();
var sleep = require('system-sleep');
var readline = require('readline');
var tm = readline.createInterface(process.stdin, process.stdout);
// PREFIX DU BOT
var prefix = ("Choisi ton prefix.");

// TOKEN DU BOT
nitro.login("T3KEN");


// Message pub [\n Pour sauter une ligne]
messagetsend = ("Votre pub")


// Vitesse
timeout = 100
// 100 =  10  Par Seconde
// 1000 = 1   par Seconde
// 2000 = 0.5 par Seconde



nitro.on('ready', () => {
  console.log("");                                                
  console.log((chalk.yellow(`                                                               Crée par Kziiz#9999 !`)));  
  console.log((chalk.yellow(`                                                                  © 2021 Kziiz.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                       Discord: https://discord.gg/nF5vj4BhrH`)));   
  console.log((chalk.red(`                                                       Github: https://github.com/kziiz`)));   
  console.log("");                                  

   console.log(`Statistiques globales : \n\nLe bot a un total de ${nitro.guilds.cache.size} serveurs. \nPour un total de ${nitro.users.cache.size} membres. \n\nMessage :\n\u001b[36m${messagetsend}\u001b[0m\n\n\n `)
  console.log("Connecté en tant que " + nitro.user.id + " | Prefix : " + prefix + " | Nombre de Serveurs "+ nitro.guilds.cache.size +" | Nombres de channels "+ nitro.channels.cache.size +" | Utilisateur totaux "+ nitro.users.cache.size +" | Nombre d'emojis totaux "+ nitro.emojis.cache.size +'');

   tm.question('\u001b[0mTape \u001b[32mENTRER \u001b[0mpour lancer le Script\n\n', (answer) => {
      dmed = "0"
      nitro.users.cache.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetsend).catch(O_o => {})
         console.log("\u001b[31;1m[" + dmed + "/" + nitro.users.cache.size + "]\u001b[37m Message envoyer à \u001b[36m" + member.username + "#" + member.discriminator)
           console.log((chalk.white(``)));                    

         if (dmed == nitro.users.cache.size) {
            console.log("\u001b[32mTon bot à terminé avec succès \nLaissez le logiciel courir 10 minutes de plus pour être sûr que tout le monde a bien reçu le DM.")
         }
      })
   })
})




process.on("unhandledRejection", error => {

      if (error) {
         console.log("Token invalide ou suspendu par discord.")
      } else {
         console.error(error);
      }
   
});
