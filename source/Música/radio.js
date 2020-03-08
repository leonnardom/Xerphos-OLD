const Discord = require("discord.js");
const config = require("../../configuração/radio.json")
var opusscript = require("opusscript");

exports.run = async(client, message, args) => {
    if(args[0] == null) {
        message.channel.send(new Discord.RichEmbed()
        .setColor("#a32aff")
        .setAuthor("Xerphos", message.client.user.displayAvatarURL)
        .setTimestamp()
        .setTitle("<:cancel:504782695667335178> Você não definiu nenhuma rádio, digite `xh!radio list` para saber todas as rádios."))
    }
    if(message.content == `xh!radio list`) {
        var embed = new Discord.RichEmbed();
        embed.setColor("#a32aff");
        let brfliter = config.filter(a=>a.pais =="Brasil")
        let br = brfliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
        let usfliter = config.filter(a=>a.pais=="EUA")
        let us = usfliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
        let poloniafliter = config.filter(a=>a.pais=="Polônia")
        let polonia = poloniafliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
        let françafliter = config.filter(a=>a.pais=="França")
        let frança = françafliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
        let croaciafliter = config.filter(a=>a.pais=="Croacia")
        let croacia = croaciafliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
        let embedlist = new Discord.RichEmbed()
        var desc = "";
        config.forEach(r => desc += `${r.id}. ${r.name}\n`);
        embed.setColor("#a32aff")
        embed.setThumbnail("https://cdn.discordapp.com/attachments/512684274122752000/529046024065646594/microphone.png")
        embed.setAuthor("Xerphos", message.client.user.displayAvatarURL)
        embed.setDescription(`<a:okay:512392301037748251> Lista de estações/rádios\n
<:brazil:513024209925046282> Estações Brasileiras
<:eua:513024190027137025> Estações Americanas
<:poland:513459025036443649> Estações da Polônia
<:france:513459028001685504> Estações da França
<:croatia:513459042996191242> Estações da Croacia
<:custom:505150729216851970> Clique nas reações para ver cada estação/rádio

Alguma rádio não está pegando? Informe o criador do Bot: **zSpl1nterUS_#8611**`);
message.channel.send(embed).then(msg=>{
msg.react('513024209925046282').then(()=>{
    msg.react('513024190027137025').then(()=>{
        msg.react('513459025036443649').then(()=>{
            msg.react('513459028001685504').then(()=>{
                msg.react('513459042996191242').then(()=>{
                    msg.react('513459646573576203')
                    })
                })
            })
    })
})
            const filter = (reaction,user)=> (reaction.emoji.id==="513024209925046282"||reaction.emoji.id==="513024190027137025"||reaction.emoji.id==="513459025036443649"||reaction.emoji.id==="513459028001685504"||reaction.emoji.id==="513459042996191242"||reaction.emoji.id==="513459646573576203")&&user.id === message.author.id
            let collector = msg.createReactionCollector(filter, {time: 60000});
            collector.on('collect', async react=>{
                if(react.emoji.id=="513024209925046282"){
                    embedlist.setColor("#a32aff")
                    embedlist.setDescription(`<:brazil:513024209925046282> Estações Brasileiras
                    ${br.join('\n')}`)
                    msg.edit(embedlist)
                    react.remove(message.author.id)
                }else if(react.emoji.id=="513024190027137025"){
                    embedlist.setColor("#a32aff")
                    embedlist.setDescription(`<:eua:513024190027137025> Estações Americanas
                    ${us.join('\n')}`)
                    msg.edit(embedlist)
                    react.remove(message.author.id)
                }else if(react.emoji.id=="513459025036443649"){
                    embedlist.setColor("#a32aff")
                    embedlist.setDescription(`<:poland:513459025036443649> Estações da Polonia
                    ${polonia.join('\n')}`)
                    msg.edit(embedlist)
                    react.remove(message.author.id)
                }else if(react.emoji.id=="513459028001685504"){
                    embedlist.setColor("#a32aff")
                    embedlist.setDescription(`<:france:513459028001685504> Estações da França
                    ${frança.join('\n')}`)
                    msg.edit(embedlist)
                    react.remove(message.author.id)
                }else if(react.emoji.id=="513459042996191242"){
                    embedlist.setColor("#a32aff")
                    embedlist.setDescription(`<:croatia:513459042996191242> Estações da Croacia
                    ${croacia.join('\n')}`)
                    msg.edit(embedlist)
                    react.remove(message.author.id)
                }else if(react.emoji.id=="505150729216851970"){
                    msg.edit(embed)
                    react.remove(message.author.id)
                }
            })
        })
    } else {
        var radio = {};
        var zn = false;
        config.forEach(r => {
            if(args[0] == r.id) {
                radio = r;
                zn = true;
            }
        });
        var vChannel = message.member.voiceChannel;
        if(!zn && args[0] == Number) return message.channel.send("<:cancel:504782695667335178> Número de rádio/estação errado!")
        if (args[0] && !message.member.voiceChannel) return message.channel.send("<:cancel:504782695667335178> Não é possível conectar sem você estar em um canal!");
            if (message.guild.member(client.user).voiceChannel != vChannel) {
                vChannel.join().then(con => {
                con.playStream(radio.url)
                message.channel.send(new Discord.RichEmbed()
                .setColor("#a32aff")
                .setTitle(`<a:music:512400492836683791> Tocando \`${radio.name}\``))
                })
            }
            if(message.content == 'xh!radio leave') {
                if (message.guild.member(client.user).voiceChannel) {
                    message.member.voiceChannel.leave()
                  message.channel.send(new Discord.RichEmbed()
                  .setColor("#a32aff")
                  .setTitle(`<a:okay:512392301037748251> Estou saindo do canal: \`${message.member.voiceChannel.name}\``))
                };
            }
        }
    }
