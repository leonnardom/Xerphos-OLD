console.log('[OPEN] > Ligando o Bot...')

const Discord = require("discord.js")
const database = require("./configuração/database.js")

const xerphos = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  messageCacheLifetime: 1680,
  disableEveryone: false,
  messageSweepInterval: 1680,
  disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking']
})

const config = require("./configuração/config.json")
const Enmap = require("enmap")
const fs = require("fs")

xerphos.config = config;
xerphos.commands = new Enmap();


xerphos.on("debug", debug => {
  console.log(`Shard ${(xerphos.shard.id + 1)}: ${debug}`)
})

//Eventos

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./eventos/${file}`);
      let eventName = file.split(".")[0];
      xerphos.on(eventName, event.bind(null, xerphos));
    });
  });
   
//Utlidades
   
fs.readdir("./source/Utilidades", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./source/Utilidades/${file}`);
      let commandName = file.split(".")[0];
      xerphos.commands.set(commandName, props);
    });
  });

//Música
   
fs.readdir("./source/Música", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./source/Música/${file}`);
        let commandName = file.split(".")[0];
        xerphos.commands.set(commandName, props);
      });
    });
  
//Informações

fs.readdir("./source/Informações", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./source/Informações/${file}`);
      let commandName = file.split(".")[0];
      xerphos.commands.set(commandName, props);
    });
  });

//Owner

fs.readdir("./source/Owner", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Owner/${file}`);
    let commandName = file.split(".")[0];
    xerphos.commands.set(commandName, props);
  });
});

//Moderação

fs.readdir("./source/Moderação", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Moderação/${file}`);
    let commandName = file.split(".")[0];
    xerphos.commands.set(commandName, props);
  });
});

//Minecraft

fs.readdir("./source/Minecraft", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Minecraft/${file}`);
    let commandName = file.split(".")[0];
    xerphos.commands.set(commandName, props);
  });
});

//Configuração DataBase

fs.readdir("./source/Configuração", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./source/Configuração/${file}`);
    let commandName = file.split(".")[0];
    xerphos.commands.set(commandName, props);
  });
});

console.log(`[Comandos] > Todos os comandos foram carregados`);

xerphos.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
if(message.content.startsWith("<@490305944551686155>")){

try {

database.Guilds.findOne({_id: message.guild.id}, function(servro, servidor) {
if(servidor) {
    
    var prefixo
    prefixo = servidor.prefix

//Mensagem de Menção

if(!message.guild.me.hasPermission("SEND_MESSAGES")) {
      console.log(`Sem permissão de enviar mensagens - ${message.guild.name} - ${message.guild.id} - ${message.author.tag}`)
  }

var embedmention = new Discord.RichEmbed()

  .setColor("#36393e")
    .setTitle(`<a:okay:512392301037748251> Para Saber Meus Comandos Digite: **\`${prefixo}ajuda\`**`)
      .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)

message.channel.send(embedmention)

} else if(!servidor) {
        var save = new database.Guilds({_id: message.guild.id})
        save.save()
      }
    }).catch(e =>{
      console.log('Mongoose Duplicada')
    })

} catch (erro) {

    console.log(`Erro no evento de Message-Menção\n${erro}`)

    }
  } 
});
  
  
          xerphos.on('guildMemberAdd', async member => {
              if (member.guild.id !== "516399193062113290") return;
              let avatar = member.user.avatarURL;
              xerphos.channels.get('516699642080133154').send(new Discord.RichEmbed()
              .setTitle("<a:owner:512392346906656778> Bem Vindo")
              .setTimestamp()
              .setColor(0x0000)
              .setThumbnail(avatar)
              .setFooter("Entrou em:")
              .setImage("https://media1.tenor.com/images/84075aec90edf35265cb2713a4cef6d1/tenor.gif?itemid=5012696")
              .setDescription(`<:sunset:512733972615135242>${member}, Seja Bem-Vindo(a)\n\n<a:like:513427602019581963> Complete o \`Captcha\` para se divertir em nosso servidor.`)
              .addField('<:team:516020368729702431>Com você temos:', `\`\`${member.guild.memberCount}\`\` membros.`)).then(async (msg) => {
                  await msg.react('512392301037748251'); 
                  xerphos.on('messageReactionAdd', (reaction, user) => {
                      if (reaction.emoji.id === '512392301037748251' && user.id !== xerphos.user.id && user.id === member.id) {
                          reaction.remove(user);
                          let role = member.guild.roles.find('name', '[Me] Members');
                          member.addRole(role.id);
                      }
                  });
              });
          })
  
          xerphos.on('guildMemberAdd', async member => {

            member.addRole('681368206098956288')
                    })

          xerphos.on('guildDelete', guild2 => {
              let canal2 = xerphos.channels.get('516062146732228630')
              let embedsaida = new Discord.RichEmbed()
              .setAuthor(xerphos.user.username)
              .setDescription(`<:tips:513424911537012766>Acabei de sair do servidor: \`${guild2.name}\``)
              .addField('<a:owner:512392346906656778> | Dono', `${guild2.owner}`, true)
              .addField('<:gearr:516026024660828180> | ID do dono', `\`${guild2.ownerID}\``, true)
              .addField('<:calendar:516018350665629715> | Criado em', `\`${moment.utc(guild2.createdAt).format('lll')}\``, true)
              .addField('<a:okay:512392301037748251> | Nome do servidor', `\`${guild2.name}\``)
              .addField('<:network:516020899342712852> | ID do servidor', `\`${guild2.id}\``, true)
              .addField('<:team:516020368729702431> | Membros:', `\`${guild2.memberCount}\``, true)
              .addField('<:planetearth:512733706113515551> | Região do servidor:', `\`${guild2.region}\``, true)
              .setTimestamp()
              .setColor("#a32aff")
          
              canal2.send(embedsaida)
          })
      
          xerphos.on('guildCreate', guild => {
              let canal = xerphos.channels.get('516062114184429603')
              let embedentrada = new Discord.RichEmbed()
              .setAuthor(xerphos.user.username)
              .setDescription(`<:tips:513424911537012766>Acabei de entrar no servidor: \`${guild.name}\``)
              .addField('<a:owner:512392346906656778> | Dono', `${guild.owner}`, true)
              .addField('<:gearr:516026024660828180> | ID do dono', `\`${guild.ownerID}\``, true)
              .addField('<:calendar:516018350665629715> | Criado em', `\`${moment.utc(guild.createdAt).format('lll')}\``, true)
              .addField(`<a:okay:512392301037748251> | Nome do servidor`, `\`${guild.name}\`` )
              .addField(`<:network:516020899342712852> | ID do servidor`, `\`${guild.id}\``, true)
              .addField('<:team:516020368729702431> | Membros:', `\`${guild.memberCount}\``, true)
              .addField('<:planetearth:512733706113515551> | Região do servidor:', `\`${guild.region}\``, true)
              .setTimestamp()
              .setColor("#a32aff")
          
              canal.send(embedentrada)
          })

xerphos.login(config.token).catch(e=> {

//config.token
//process.env.TOKEN

console.log(`Erro em Meu Login - Erro:\n${e}`)

});
