const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Commands')
            .setDescription('Liste des commands...')
            .setColor('BLACK')
            .addField('Commandes', `Fréquence`, true)
            .addField('Info', `Génére une fréquence sécurisée`, true))
    },
    name: 'help'
}
