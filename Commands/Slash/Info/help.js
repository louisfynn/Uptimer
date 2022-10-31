const { EmbedBuilder, ApplicationCommandType } = require('discord.js')

module.exports = {
	name: 'help',
	description: "Shows you the list of commands!",
  usage: "",
  category: "info",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
  	run: async (client, interaction) => {
      
       const embed = new EmbedBuilder()
            .setTitle('Uptimer Commands')
            .setColor(0x00ffff)
            .setURL(`https://uptimer.lol`)
            .addFields([
                {
                    name: `/monitor add `,
                    value: `Adds monitor to your project.`,
                    inline: true
                },
                {
                    name: `/monitor remove`,
                    value: `Remove monitor from your projects.`,
                    inline: true
                },
                {
                    name: `/monitor total`,
                    value: `Show all projects.`,
                    inline: true
                },
                {
                    name: `/invite`,
                    value: `Get the bot's invite link.`,
                    inline: true
                },
                  {
                    name: `/ping`,
                    value: `Check bot's ping.`,
                    inline: true
                },
                  {
                    name: `/stats`,
                    value: `show the current statistics of the bot.`,
                    inline: true
                },
     {
                    name: `/together`,
                    value: `Watch youtube videos together!`,
                    inline: true
                },
     {
                    name: `/first-message`,
                    value: `Get the First Message in a Channel.`,
                    inline: true
                },
     {
                    name: `/meme`,
                    value: `sends an epic meme`,
                    inline: true
                },
     {
                    name: `/role add`,
                    value: `Manage roles of the server or members.`,
                    inline: true
                }
            ]);
            await interaction.reply({
                embeds: [embed]
            });
    }
};