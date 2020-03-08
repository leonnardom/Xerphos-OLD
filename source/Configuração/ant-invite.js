const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

exports.run = async (xerphos, message, args, prefixo) => {

console.log(`Comando ant-invite ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let razaod = args.slice(1).join(' ')

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {

          if(servidor) {
            if(!razaou.length < 1) {
                /*if(args[0] == "canal") {
                    if(!razaod.length < 1) {

                    let guild  = xerphos.guilds.get(message.guild.id)
                    let canal = guild.channels.get(args[1]) || guild.channels.find(a=> a.name == args[1]) || message.mentions.channels.first()
                    
                      if(!canal){
                        return message.channel.send('<:cancel:504782695667335178> | **Canal Inválido**')
                      }
                      servidor.inviteChannels.push(canal.id)
                      servidor.ConfirmeInvite = true
                      servidor.save() 
                      message.channel.send(`<:shuffle:508114778695139348> | **Canal Definido:** ${canal}`)
    
                } else {
                  message.channel.send(`<:cancel:504782695667335178> | ${message.author}, Use: **\`${prefixo}ant-invite [canal] <ch>\`**`)
                }*/
               if(args[0] == "remove") { 
                if(servidor.antinvite) {
                  servidor.antinvite = false
                  servidor.inviteChannels = []
                  servidor.ConfirmeInvite = false
                  servidor.save()
                  message.channel.send(`<:desligado:530515719406878720> | ${message.author}, **\`Ant-Invite\`** desativado neste **servidor**`)
                } else {
                  message.channel.send(`<:cancel:504782695667335178> | ${message.author}, Não há nenhum **\`Ant-Invite\`** setado neste **servidor**`)
                }
              } else if(args[0] == "ajuda") {

    let server = servidor.ConfirmeInvite
    let = server;
    
    if(server === false) server = "Nenhum";
    if(server === true) server = `${servidor.inviteChannels.map(a=> `<#${a}>`).join(',')}`;

    let stat = servidor.ConfirmeInvite
    let = stat;
    
    if(stat === true) stat = "<:ligado:530515743524126731> Ativado";
    if(stat === false) stat = "<:desligado:530515719406878720> Desativado";
             
    //**<a:okay:512392301037748251> Canais: ${server}
  message.channel.send({
                    'embed': {
                      'title': '<a:okay:512392301037748251> Ant-Invite',
                      'description': `**<:custom:505150729216851970> Como Usar:**\`\`\`${prefixo}ant-invite [on] ativa o Ant-Invite\n${prefixo}ant-invite [remove] remove o Ant-Invite\`\`\`\nStatus: ${stat}`,
                      'color': 0x36393e,
                      'timestamp': new Date(),
                      'footer': {
                        'icon_url': message.author.displayAvatarURL,
                        'text': message.author.username
                      },
                      'thumbnail': {
                        'url': xerphos.user.displayAvatarURL
                      }
                    }
                  })

              } else if(args[0] == "on") {

                if(servidor.antinvite === true) return message.channel.send(` <:ligado:530515743524126731> | ${message.author}, **\`Ant-Invite\`** já está ativado neste **servidor**`);

                servidor.antinvite = true
                servidor.save()
                message.channel.send(` <:ligado:530515743524126731> | ${message.author}, **\`Ant-Invite\`** ativado neste **servidor**`)
                
              } else {
                message.channel.send(`<:cancel:504782695667335178> | ${message.author}, argumento **inválido**`)
              }
            } else {
                message.channel.send(`<a:okay:512392301037748251> | ${message.author}, Use: **\`${prefixo}ant-invite [ajuda]\`** para saber meus **parâmetros**`)
            }
        } else {
            var save = new database.Guilds({_id: message.guild.id})
            save.save()
            }
        })
      } else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    } 
  }).catch(e => {
    console.log('Mongoose Duplicada')
  })
}