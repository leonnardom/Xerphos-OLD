const Discord = require("discord.js")
const lista = require('../../configuração/queue.js')
const radioJson = require("../../configuração/radio.json")

exports.run =  async (dean, message, args, prefixo) => {

console.log(`Comando radio ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var voicechannel = message.member.voiceChannel;
var serverQueue = lista.queue.get(message.guild.id);

    if(serverQueue) {
        if(serverQueue.music == true) return message.channel.send({
            embed: {
                description: `<:314240199406387201:490756225575682049> | já estou tocando **\`música\`** no servidor. Use **\`${prefixo}stop\`** para parar a **música**`,
                color: 0x36393e,
            }
        })
    }

    if(!voicechannel) return message.channel.send({
            embed: {
                title: `<:314240199406387201:490756225575682049> Conecte-se a um canal de voz`,
                color: 0x36393e,
            
            }
        })

    if (args[0] == 'lista') {
        var embed = new Discord.RichEmbed();
        embed.setColor('#36393e');
        embed.setAuthor("Rádios Disponíveis", message.guild.iconURL)
        let polfilter = radioJson.filter(a => a.pais == "Polônia")
        let pol = polfilter.map(b => `ID: \`${b.id}\` ▸ ${b.name}`)
        let brfliter = radioJson.filter(a => a.pais == "Brasil")
        let br = brfliter.map(b => `ID: \`${b.id}\` ▸ ${b.name}`)
        let usfilter = radioJson.filter(a => a.pais == "EUA")
        let us = usfilter.map(b => `ID: \`${b.id}\` ▸ ${b.name}`)
        let frfilter = radioJson.filter(a => a.pais == "França")
        let fr = frfilter.map(b => `ID: \`${b.id}\` ▸ ${b.name}`)
        
        let embedlist = new Discord.RichEmbed()
            .setThumbnail(dean.user.displayAvatarURL)
            .setColor('#36393e')
            .setFooter(`${prefixo}radio play [ID/NOME] - Inicia a Rádio`, message.author.displayAvatarURL)
            .setThumbnail(dean.user.displayAvatarURL)
        var desc = "";
        radioJson.forEach(r => desc += `${r.id}. ${r.name}\n`);
        embed.setDescription(`  \n● :flag_br: Estações Brasileiras\n\n● :flag_us: Estações Americanas\n\n● :flag_pl: Estações Polonesas\n\n● :flag_fr: Estações Francesas`)
        embed.setFooter(message.author.username, message.author.displayAvatarURL)
        embed.setThumbnail(dean.user.displayAvatarURL)
        embed.setTimestamp()
        await message.channel.send(embed).then(async msg => {

        await msg.react(':br:513528565564964866');
        await msg.react(':us:513528565996847144');
        await msg.react(':pl:513528565720154133');
        await msg.react(':fr:513528565581611045');

        const filter = (reaction, user) => (reaction.emoji.id === "513528565564964866" || reaction.emoji.id === "513528565996847144" || reaction.emoji.id === "513528565720154133" ||
        reaction.emoji.id === "513528565581611045") && user.id === message.author.id
        let collector = await msg.createReactionCollector(filter, { time: 60000 });

        await collector.on('collect', async react => {
            if (react.emoji.id == "513528565564964866") {
                embedlist.setDescription(`**:flag_br: Estações Brasileiras**\n\n${br.join('\n')}`)
                msg.edit(embedlist)
                react.remove(message.author.id)
            } else if (react.emoji.id == "513528565996847144") {
                embedlist.setDescription(`**:flag_us: Estações Americanas**\n\n${us.join('\n')}`)
                msg.edit(embedlist)
                react.remove(message.author.id)
            } else if (react.emoji.id == "513528565720154133") {
                embedlist.setDescription(`**:flag_pl: Estações Polonesas**\n\n${pol.join('\n')}`)
                msg.edit(embedlist)
                react.remove(message.author.id)
            } else if (react.emoji.id == "513528565581611045") {
                embedlist.setDescription(`**:flag_fr: Estações Francesas**\n\n${fr.join('\n')}`)
                msg.edit(embedlist)
                react.remove(message.author.id)
            }
        })
        msg.delete(60000)
        message.delete(60000)
    })
    } else if (args[0] == 'play') {

        if(voicechannel !== message.guild.members.get(dean.user.id).voiceChannel) return message.channel.send({
            embed: {
                title: `<:314240199406387201:490756225575682049> | ${message.author}, conecte-se ao canal de **voz** que eu estou conectado para **prosseguir**`,
                color: 0x36393e,
            }
        })
        join(radioJson, message, args, dean, prefixo);

    } else if (args[0] == 'leave') {

        if(voicechannel !== message.guild.members.get(dean.user.id).voiceChannel) return message.channel.send({
            embed: {
                title: `<:314240199406387201:490756225575682049> | ${message.author}, conecte-se ao canal de **voz** que eu estou conectado para **prosseguir**`,
                color: 0x36393e,
            }
        })
    leave(message, serverQueue, dean);

    } else {

        if(serverQueue) {
            if(serverQueue.radio) {
        
        var rad = serverQueue.radio;
        let = rad;
        
        if(rad === true) rad = "<:504105920536510474:507769907308658708> Ativada";
            if(rad === false) rad = "<:504105920243040257:507769906884902923> Desativada";
        }

        } else {
            let = rad;
            rad = "<:504105920243040257:507769906884902923> Desativada";
        }

    var embed = new Discord.RichEmbed()

    .setAuthor('Comandos de Rádio', dean.user.displayAvatarURL)
        .setDescription(`**Status: ${rad}**\n\n**\`\`\`${prefixo}radio [lista] ✦ Para saber quais rádios eu possuo\n${prefixo}radio [play] [radio] ✦ Para ligar a rádio no servidor\n${prefixo}radio [leave] ✦ Para desligar a rádio no servidor\`\`\`**`)
            .setColor('#36393e')
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
                    .setTimestamp()
                        .setThumbnail(message.guild.iconURL)

    message.channel.send(embed)
}

} catch (e) {

    console.log(`Erro comando de Radio - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}

async function join(radioJson, message, args, dean, prefixo) {

    var voiceChannel = message.member.voiceChannel;
    var radio = {};
    var controle = false;

    if (!voiceChannel) {
        message.channel.send({
            embed: {
                description: `<:314240199406387201:490756225575682049> | ${message.author}, você **precisa** está em um canal de voz para ligar a **\`rádio\`**`,
                color: 0x36393e,
            }
        })
    } else {

var permissions = voiceChannel.permissionsFor(message.client.user);

		if(!permissions.has('CONNECT')) {
			return message.channel.send({
                embed: {
                    description: `<:314240199406387201:490756225575682049> | ${message.author}, sem permissão para conectar ao canal de **voz**`,
                    color: 0x36393e,
                }
            })
        }

		if(!permissions.has('SPEAK')) {
			return message.channel.send({
                embed: {
                    description: `<:314240199406387201:490756225575682049> | ${message.author}, sem permissão para **falar**`,
                    color: 0x36393e,
                }
            })
        }

    radioJson.forEach(r => {
        if (args[1] == r.id || args.join(' ').slice(5) == r.name) {
            radio = r;
            controle = true;
        }
    })

    if(voiceChannel) {
    
    if (controle == false) {
        message.channel.send({
            embed: {
                description: `<:314240199406387201:490756225575682049> | Nenhuma **\`rádio\`** encontrada, digite **\`${prefixo}radio\`** e consulte as **rádios** disponíveis`,
                color: 0x36393e,
            }
        }) 
    } 

    if(controle == true) {

        message.channel.send({
            embed: {
                description: `<:313905428121780225:490744637066313748> | ${message.author}, **Ligando** a rádio \`${radio.name}\` no canal \`${message.member.voiceChannel.name}\``,
                color: 0x36393e,
            }
        }).then(raP => {
            
            message.member.voiceChannel.join().then(cnc => {

            var serverQueue = lista.queue.get(message.guild.id);

            var song = {
            
                title: radio.name,
                url:  radio.url,
                inserido: message.author.tag,
                duracao: '[AO VIVO]',
                numero: 1,
                thumb: 'https://image.freepik.com/free-vector/retro-radio-logo_1438-470.jpg'
            };
                    if (!serverQueue) {
                        
                        var queueConstruct = {

                            volume: 5,
                            radio: true,
                            soms: [],
                            music: false,
                            atual: 0,
                            inicio: new Date(),
                            duraTotal: '[AO VIVO]',
                            canalVoz: voiceChannel,
                            connection: cnc
                        };
                
                        lista.queue.set(message.guild.id, queueConstruct);
                        queueConstruct.soms.push(song);

                        } 
                        
                        cnc.playStream(radio.url) ,{passes: 1, bitrate: 256000}        
                    })
                    
                })
            }
        }
    }   
};

async function leave(message, serverQueue, dean) {

        if (!message.member.voiceChannel) return message.channel.send({
            embed: {
                description: `<:314240199406387201:490756225575682049> | ${message.author}, você não está em um canal de **voz**`,
                color: 0x36393e,
            }
        })
    
        var voiceChannel = message.member.voiceChannel;

        if (!message.guild.members.get(dean.user.id).voiceChannel);
        else if (voiceChannel !== message.guild.members.get(dean.user.id).voiceChannel) return message.channel.send('<:314240199406387201:490756225575682049> | Você não está no canal que eu **estou** **\`conectado\`**');
    
        if (!serverQueue) {
            message.channel.send({
                embed: {
                    description: `<:314240199406387201:490756225575682049> | ${message.author}, a rádio não está **online** no momento`,
                    color: 0x36393e,
                }
            })
        } else {
        
        voiceChannel.leave();

        message.channel.send({
            embed: {
                description: `<:313905428121780225:490744637066313748> | ${message.author}, **desligando** a rádio no canal **\`${message.member.voiceChannel.name}\`**`,
                color: 0x36393e,
            }
        }).then(leaveR => {
            
        lista.queue.delete(message.guild.id)
        
        })
    }
}


