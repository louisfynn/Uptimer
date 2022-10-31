
const { EmbedBuilder, ApplicationCommandType, ComponentType } = require('discord.js')
const fs = require('fs')

module.exports = {
	name: 'help',
	description: "Shows you a help menu!",
  usage: "",
  category: "info",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: true,
	type: ApplicationCommandType.ChatInput,
  	run: async (client, interaction) => {
let intro = `The available commands are provided below. To view the available commands, select the command name from the selection menu provided below`
    let components = await client.function.helpComponentBuilder()
    let embed = new EmbedBuilder()
      .setColor('#f54242')
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
      .setDescription(`${intro}\n\n**Hi I'm Uptimer! A discord bot that lets your projects run 24/7 for free!**`)
    await interaction.reply({ embeds: [embed], components: components })
    try {
      let filter = u => u.user.id === interaction.member.id;
      let collector = await interaction.channel.awaitMessageComponent({
        filter,
        time: 30000,
        componentType: ComponentType.SelectMenu
      })


      let category = collector.values[0].split('_')[1]
      let commands = fs.readdirSync(`./Commands/Slash/${category}`).filter(file => file.endsWith(".js"))
      let capCategory = category.charAt(0).toUpperCase() + category.substr(1)
      let emojiSync = {
        'Fun': '👾',
        'Info': '🤖',
        'Uptime': '🛎',       
        'Utility': '🔘'
      }
      components[0].components[0].setDisabled(true)
        .setPlaceholder(`${emojiSync[category]} ${capCategory}`)
      collector.deferUpdate()
      embed.setTitle(`${emojiSync[category]} ${capCategory} Commands`)
        .setDescription(`> \`${commands.join('\` • \`').replace(/.js/g, '')}\``)
      await interaction.editReply({ embeds: [embed], components: components })
    } catch (err) {
      return
    }
  }
}