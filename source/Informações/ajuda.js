const Discord = require("discord.js");

exports.run = (client, message, args, prefixo) => {

    avatar = message.author.avatarURL
    var embedA = new Discord.RichEmbed()


        .setTitle('**»** Verifique sua \`\`\nDM\`\`\n')
        .setColor("#a32aff")
        .setTimestamp()
    message.react("market:529756775566540800")
    message.channel.send(``).then(message => {
        message.delete(8000)
    })

    message.channel.send(embedA).then(message => {
        message.delete(8000)
    }).then(() => {

        var embedB = new Discord.RichEmbed()

            .setColor("#a32aff")
            .setDescription(`ㅤㅤㅤㅤㅤㅤ   <:xerphos_circle:529761021880172554><@490305944551686155> | Comandos<:xerphos_circle:529761021880172554>   \n\nㅤㅤㅤㅤㅤㅤ<:happiness:529755558979436562>Diversão | Exemplo: \`\`\n${prefixo}corrida\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ<:man:505042016745553940>Administração | Exemplo: \`\`\n${prefixo}!ban\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ<:sett:529756794025803776>Configuração | Exemplo: \`\`\n${prefixo}autorole\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ<:help:529757307379122208>Informação | Exemplo: \`\`\n${prefixo}botinfo\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ<a:music:512400492836683791>Música | Exemplo: \`\`\n${prefixo}play\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ<a:minecraft:508786928481599490>Minecraft | Exemplo: \`\`\n${prefixo}mcskin\`\`ㅤㅤㅤㅤㅤ\nㅤㅤㅤㅤㅤㅤ <:photoshop:516045794965454853>Photoshop | Exemplo \`\`${prefixo}nitro\`\`ㅤㅤㅤㅤㅤㅤ \n\nPrecisa de mais ajuda? Entre no meu servidor de suporte:\n[[Convite]](https://discord.gg/snTPxW7)`)
            .setTimestamp()
            .setThumbnail(message.client.user.avatarURL)

        message.author.send(embedB).then((c) => {
            c.react('529755558979436562').then(() => {
                c.react('505042016745553940').then(() => {
                    c.react('529756794025803776').then(() => {
                        c.react('529757307379122208').then(() => {
                            c.react('512400492836683791').then(() => {
                                c.react('508786928481599490').then(() => {
                                    c.react('516045794965454853').then(() => {
                                        c.react('529767496043986945').then(() => {
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            let diversãofilter = (r, u) => r.emoji.id === '529755558979436562' && u.id == message.author.id;
            let diversão = c.createReactionCollector(diversãofilter, { time: 60000 });

            let admfilter = (r, u) => r.emoji.id === '505042016745553940' && u.id === message.author.id;
            let adm = c.createReactionCollector(admfilter, { time: 60000 });

            let cfgfilter = (r, u) => r.emoji.id === '529756794025803776' && u.id == message.author.id;
            let cfg = c.createReactionCollector(cfgfilter, { time: 60000 });

            let infofilter = (r, u) => r.emoji.id === '529757307379122208' && u.id == message.author.id;
            let info = c.createReactionCollector(infofilter, { time: 60000 })

            let musicfilter = (r, u) => r.emoji.id === '512400492836683791' && u.id == message.author.id;
            let music = c.createReactionCollector(musicfilter, { time: 60000 })

            let minecraftfilter = (r, u) => r.emoji.id === '508786928481599490' && u.id == message.author.id;
            let minecraft = c.createReactionCollector(minecraftfilter, { time: 60000 })

            let photoshopfilter = (r, u) => r.emoji.id === '516045794965454853' && u.id == message.author.id;
            let photoshop = c.createReactionCollector(photoshopfilter, { time: 60000 })

            let deletefilter = (r, u) => r.emoji.id === '529767496043986945' && u.id == message.author.id;
            let deleteA = c.createReactionCollector(deletefilter)

            cfg.on('collect', async _ => {
                var a = new Discord.RichEmbed()
                    .setTitle('<:sett:529756794025803776> Minha Administração')
                    .setDescription(`**»**\`\`${prefixo}autorole\`\` - Seta uma tag pro membro receber quando entrar no Servidor.\n**»**\`\`${prefixo}welcome\`\` - Seta a mensagem pra quando o membro entrar no Servidor.\n**»**\`\`${prefixo}saída\`\` - Seta a mensagem pra quando um membro sair do Servidor.\n**»**\`\`${prefixo}prefix\`\` - Muda o prefixo meu em seu servidor\n**»**\`\`${prefixo}ant-invite\`\` - Desativa permissão de membros enviar convites de outros servidor no seu.\n**»**\`\`${prefixo}config\`\` Mostra todas as configurações se estão on/off.`)
                    .setTimestamp()
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setColor("#a32aff")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                c.edit(a)

            })

            minecraft.on('collect', async _ => {
                var l = new Discord.RichEmbed()
                    .setTitle('<a:minecraft:508786928481599490> Minecraft')
                    .setDescription(`**»**\`\`${prefixo}mchelm\`\` - Mostra a cabeça da skin de frente.\n**»**\`\`${prefixo}mcbody\`\` - Mostra o corpo de uma skin.\n**»**\`\`${prefixo}mcskin\`\` - Manda a skin para você baixar.\n**»**\`\`${prefixo}mcplayer\`\` - Mostra toda a skin.\n**»**\`\`${prefixo}mchead\`\` - Mostra a cabeça da skin.\n**»**\`\`${prefixo}mcquery\`\` \`(IP)\` - Mostra as informações de um Servidor.`)
                    .setTimestamp()
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setColor("#a32aff")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                c.edit(l)

            })

            adm.on('collect', async __ => {
                var b = new Discord.RichEmbed()
                    .setTitle('<:man:505042016745553940> Administração')
                    .setDescription(`**»**\`\`${prefixo}lockdown\`\` <Tempo: s, m, h, d> - Muta o chat por um determinado tempo.\n**»**\`\`${prefixo}softban\`\` <Usuario> - Bane e desbane o membro.\n**»**\`\`${prefixo}votekick\`\` <Usuario> - Faz uma votação para o membro ser kickado.\n**»**\`\`${prefixo}warn\`\` <Usuario> <Motivo> - Da um warn em um membro.\n**»**\`\`${prefixo}votação\`\` - Abre uma votação no servidor.\n**»**\`\`${prefixo}fakemsg\`\` \`<Menção>\` - Faz o bot mandar uma mensagem como se fosse o usuário.\n**»**\`\`${prefixo}onall\`\` - Ativa todos os canais.\n**»**\`\`${prefixo}offall\`\` - Desativa todos os canais.\n**»**\`\`${prefixo}anuncio\`\` \`<Menssagem>\` - Faz um anúncio em um Servidor.\n**»**\`\`${prefixo}say\`\` \`<Menssagem>\`- Manda uma menssagem como se fosse o bot.\n**»**\`\`${prefixo}limpar\`\` \`<Quantia>\` - Limpa uma quantidade de mensagens em um canal.\n**»**\`\`${prefixo}ban\`\` \`<Menção>\` \`<Motivo>\` - Bane um usuário do Servidor.\n**»**\`\`${prefixo}kick\`\` \`<Menção> <Motivo>\` - Kicka um usuário do Servidor.\n**»**\`\`${prefixo}mute\`\` \`<Menção> <Tempo>\` - Muta um usuário do Servidor.\n**»**\`\`${prefixo}unmute\`\` \`<Menção>\` - Desmuta um usuário do Servidor.`)
                    .setTimestamp()
                    .setColor("#a32aff")
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                c.edit(b)
            })

            deleteA.on('collect', async _ => {
                c.delete()
            })

            diversão.on('collect', async ____ => {
                var d = new Discord.RichEmbed()
                    .setTimestamp()
                    .setColor("#a32aff")
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                    .setTitle('<:happiness:529755558979436562> Diversão')
                    .setDescription(`**»**\`\`${prefixo}ship\`\` <Usuario> <Usuario 2> - Shipa dois membros.\n**»**\`\`${prefixo}reverse\`\` - Faz o reverso da palavra desejada.\n**»**\`\`${prefixo}laranjo\`\` - Faz mandar uma mensagem com as palavras desejadas, com uma foto de laranja.\n**»**\`\`${prefixo}cry\`\` - Faz um brincadeira de fazer o membro chorar.\n**»**\`\`${prefixo}couc\`\` - Brincadeira com um jogo de Cara Ou Coroa.\n**»**\`\`${prefixo}bigemoji\`\` - Nome do Emoji.\n**»**\`\`${prefixo}primeiraspalavras\`\` \`<Mensagem>\` - Faz um meme com as palavras escolhidas.\n**»**\`\`${prefixo}waifu\`\` - Classifica o quanto um nome é legal.\n**»**\`\`${prefixo}gay\`\` \`<Menção>\` - Mostra o quanto um player é gay.\n**»**\`\`${prefixo}ascii\`\` - \`<Texto>\` Faz uma animação com um texto.\n**»**\`\`${prefixo}et\`\` \`<Pergunta>\` - Faz uma pergunta ao Et Bilu.\n**»**\`\`${prefixo}bigemoji\`\` \`<Nome>\` - Manda um emoji em tamanho familía\n**»**\`\`${prefixo}corrida\`\` \`<Menção>\` - Aposte uma corrida com alguém.\n**»**\`\`${prefixo}dog\`\` - Mostra um cachorro aleatório\n**»**\`\`${prefixo}beijar\`\` \`<Menção>\` - Você da um beijo em algum player\n**»**\`\`${prefixo}luta\`\` \`<Menção>\` - Comando para dar um soco em alguém.\n**»**\`\`${prefixo}tapa\`\` \`<Menção>\` - Da um tapa em um membro.\n**»**\`\`${prefixo}policia\`\` \`<Menção>\` - Chama a policia para um membro.`)
                c.edit(d)
            })

            info.on('collect', async ____ => {
                var e = new Discord.RichEmbed()
                    .setTimestamp()
                    .setColor("#a32aff")
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setTitle('<:help:529757307379122208> Informação')
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                    .setDescription(`**»**\`\`${prefixo}xerphos\`\` - Mostra em quantos e quais servidores estou tocando música.\n**»**\`\`${prefixo}partners\`\` - Mostra os parceiros do Xerphos.\n**»**\`\`${prefixo}guilds\`\` - Mostra a lista de servidores que o bot está no momento.\n**»**\`\`${prefixo}youtube\`\` - Faz uma pesquisa de um vídeo no YouTube.\n**»**\`\`${prefixo}serverinfo\`\` - Mostra as informações do servidor.\n**»**\`\`${prefixo}roles\`\` - Mostra todos os cargos do servidor.\n**»**\`\`${prefixo}uptime\`\` - Mostra a quanto tempo o Bot está on.\n**»**\`\`${prefixo}status\`\` - Mostra as informações de players Online, Offline...\n**»**\`\`${prefixo}divulgadores\`\` - 1ºMetodo de ver quem mais convidou membros no servidor.\n**»**\`\`${prefixo}invites\`\` - 2ºMetodo de mostrar quem mais convidou membros no servidor.\n**»**\`\`${prefixo}criador\`\` - Mostra o Discord do meu Criador.\n**»**\`\`${prefixo}convite\`\` - Manda um convite para me invitar para seu servidor.\n**»**\`\`\nx!calculdardias\`\` \`<Menção>\` - Mostra a quanto tempo o usuário foi registrado no Discord.\n**»**\`\`${prefixo}clima\`\` \`<Lugar>\` - Mostra as informações do clima.\n**»**\`\`\nx!canalinfo\`\` - Mostra as informações do canal.\n**»**\`\`${prefixo}criarconvite\`\` - Cria um convite do Servidor\n**»**\`\`${prefixo}avatar\`\` \`<Menção>\` - Mostra o avatar de alguém.\n**»**\`\`${prefixo}botinfo\`\` - Mostra as informações do Bot.\n**»**\`\`${prefixo}ping\`\` - Mostra o Ping..\n**»**\`\`${prefixo}userinfo\`\` \`<Menção>\` - Mostra o perfil de alguém.\n\nPara saber mais comandos de Informação, \`\`digite ${prefixo}info\`\``)
                c.edit(e)
            })
            photoshop.on('collect', async _ => {
                var m = new Discord.RichEmbed()
                    .setTitle('<:photoshop:516045794965454853> Photoshop')
                    .setDescription(`\`\`${prefixo}nitro\`\` - Faz sua foto de perfil em formato do Discord Nitro.`)
                    .setTimestamp()
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setColor("#a32aff")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                c.edit(m)
            })
            music.on('collect', async ____ => {
                var f = new Discord.RichEmbed()
                    .setTimestamp()
                    .setColor("#a32aff")
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/095ff2c9f49c4a4f81071887433b0412.png?size=2048")
                    .setFooter('Xerphos - Verificado 2019', message.client.user.avatarURL)
                    .setTitle('<a:music:512400492836683791> Música')
                    .setThumbnail("https://cdn.discordapp.com/avatars/490305944551686155/d4b468af4a0453f32b3a3891aad23048.png?size=2048")
                    .setDescription(`**»**\`\`${prefixo}restart\`\` - Começa a música atual do inicio.\n**»**\`\`${prefixo}join\`\` - Conecta o Bot ao canal de voz desejado\n**»**\`\`${prefixo}leave\`\` - Desconecta o Bot do canal de voz.\n**»**\`\`${prefixo}play\`\` \`<Nome>\` - Toca uma música.\n**»**\`\`${prefixo}stop\`\` - Para todas as musícas que está tocando.\n**»**\`\`${prefixo}pause\`\` - Pausa a música atual.\n**»**\`\`${prefixo}resume\`\` - Retoma a música pausada.\n**»**\`\`${prefixo}queue\`\` - Mostra a lista de reprodução.\n**»**\`\`${prefixo}skip\`\` - Avança para a música seguinte.\n**»**\`\`${prefixo}volume\`\` - Configura o volume.\n**»**\`\`${prefixo}np\`\` - Mostra a música que está tocando.\n**»**\`\`${prefixo}radiolist\`\`- Lista todas as rádios disponiveis.\n**»**\`\`${prefixo}radio\`\` \`<Número>\` - Toda a rádio escolhida.`)
                c.edit(f)
            })
        })
    })
}


module.exports.config = {
    name: "comandos",
    aliases: ["help", "ajuda", "comandos"]
}