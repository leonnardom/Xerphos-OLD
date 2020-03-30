const database = require("../../configuração/database.js");

exports.run = async (xerphos, message, args) => {

    console.log(`Comando Ban ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let mat = message.author.tag

    database.Users.findOne({ _id: message.author.id }, async function (erro, usuario) {

        if (usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send({
                embed: {
                    description: `**${mat}**, Eu não tenho permissão para banir membros`,
                    color: 0x36393e
                }
            })
            let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            let reason = args.slice(1).join(" ")
            if (!reason) {
                reason = "Não Informado"
            }
            if (!member) return message.channel.send({
                embed: {
                    description: `**${mat}**, Mencione o Membro`,
                    color: 0x36393e
                }
            })
            if (member.id === message.author.id) return message.channel.send({
                embed: {
                    description: `**${mat}**, Não se pode banir a si mesmo`,
                    color: 0x36393e
                }
            })
            if (!member.bannable) return message.channel.send({
                embed: {
                    description: `**${mat}**, Eu não consegui banir o membro: **${member.user.tag}**`,
                    color: 0x36393e
                }
            })
            member.ban(`${mat} | ${reason}`).then(() => {
                message.channel.send({
                    embed: {
                        title: `**Usuário Banido com Sucesso**`,
                        fields: [
                            {
                                name: "Nome:",
                                value: `${member.user.tag}`
                            },
                            {
                                name: "ID:",
                                value: `${member.user.id}`
                            },
                            {
                                name: "Banido Por:",
                                value: `${mat}`
                            },
                            {
                                name: "Motivo:",
                                value: `${reason}`
                            }

                        ],
                        color: 0x36393e,
                        thumbnail: {
                            url: member.user.displayAvatarURL
                        }
                    }
                })
            });
        } else {
            var yEmbed = new Discord.RichEmbed()

                .setColor("#36393e")
                .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
            message.channel.send(yEmbed)
        }
    })
}