exports.run =  async (xerphos, message, args) => {

console.log(`Comando Say ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

if(!args[0]) return message.channel.send({embed: {
    description: `**${message.author.username}**, insira o que eu vou falar`,
    color: 0x36393e
}}).then(msg => msg.delete(3000));

let sayMessage = args.join(" ");

message.channel.send(sayMessage).then(() => {
    
    message.delete().catch((e)=> {})

    })
}