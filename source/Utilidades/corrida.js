const Discord = require('discord.js');

exports.run = (client, message, args) => {

let user = message.mentions.users.first();
if(!args[0]){
    message.channel.send(new Discord.RichEmbed()
    .setDescription("<:settings:514924323618816021>**Comando:** xh!corroda")
    .setColor("#a32aff")
    .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
    .addField("<:st:514922245370413087>Uso:", "\`\`xh!corrida <@usuario>\`\`")
    .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!corrida @zSpl1nterUS_\`\`"))
    }
        let volte = args[0];
        if (!volte) return; const Corrida = "<@" + message.author.id + ">" 
      const corrida2 =  " <@" + user.id + ">"
      var falas = [" Fez **200** metros 🏎 ....."," Fez **500** metros 🏎 ..........."," Fez **800** metros 🏎 .............."," Fez **1000** metros 🏎 ................."," Fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
      message.channel.send({
          "embed": {
              "title": "🏎 Corrida",
              "description": " O " + Corrida + " e" +  corrida2 + " Estão disputando uma corrida" ,
              "color": "0x0000",
              
              "fields": [
                  {
                      "name":"Sobre a corrida:",
                      "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                      "inline": false
                    }
                ]
            }
        })
    }
