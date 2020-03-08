exports.run =  async (xerphos, message, args) => {
    
    console.log(`comando xerphostroll ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    var a = args.join(" ");

    if(!message.guild.me.hasPermission("MANAGE_WEBHOOKS")){ return message.channel.send({embed: {
        description: `**${message.author.username}**, Eu não tenho permissão para criar webhook's`,
        color: 0x36393e
    }}).then(msg => msg.delete(3000));
}

    if(!a) return message.channel.send({embed: {
        description: `**${message.author.username}**, insira o que eu vou falar`,
        color: 0x36393e
    }}).then(msg => msg.delete(3000));
    
    message.channel.createWebhook('XerphosTroll', 'https://res.cloudinary.com/teepublic/image/private/s--qNSVSIJ1--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1531578250/production/designs/2890359_0.jpg').then(y => {
        y.send(a);
        y.delete();
    })

    message.delete()
};