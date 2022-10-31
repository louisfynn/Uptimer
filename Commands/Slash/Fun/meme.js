const {EmbedBuilder, ApplicationCommandType } = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
	name: 'meme',
	description: "sends an epic meme",
  usage: "",
  category: "fun",
	userPerms: [''],
	botPerms: [''],
	cooldown: 15,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new EmbedBuilder()
		.setColor('#03fcdb')
        .setDescription(`From [${random}](https://reddit.com/r/${random})`)
        .setTitle("🎭 Meme")
        .setImage(img)

        interaction.reply({embeds: [embed]})
    }
}