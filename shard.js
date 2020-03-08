require('http').createServer().listen(3000)
const { ShardingManager } = require('discord.js')
const manager = new ShardingManager('./xerphos.js', { totalShards: 1 })

manager.spawn()

manager.on('launch', shard => console.log(`Shard ${shard.id} iniciada com sucesso!`));