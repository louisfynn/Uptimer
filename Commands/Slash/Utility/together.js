const { ChannelType, ApplicationCommandOptionType } = require('discord.js'),
  { DiscordTogether } = require('discord-together')
module.exports = {
  name: "together",
  description: "Watch youtube videos together!",
  usage: "/together channel:#together activity:Youtube",
  category: "utility",
  userPerms: [""],
  botPerms: [""],
  cooldown: 5,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: 1,
  options: [
    {
      name: "channel",
      description: "Channel you want to activate this activity!",
      type: ApplicationCommandOptionType.Channel,
      channelTypes: [ChannelType.GuildVoice],
      required: true
    },
    {
      name: "activity",
      description: "The activity you want to perform!",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "Youtube", value: "youtube" },
        { name: "Word Snack", value: "wordsnack" },
        { name: "Sketch Heads", value: "sketchheads" },
        { name: "Chess", value: "chess" },
        { name: "Poker", value: "poker" },
        { name: "Checkers", value: "checkers" },
        { name: "Betrayal", value: "betrayal" },
        { name: "Fishing", value: "fishing" },
        { name: "Lettertile", value: "lettertile" },
        { name: "Doodlecrew", value: "doodlecrew" },
        { name: "Spellcast", value: "spellcast" },
        { name: "Awkword", value: "awkword" },
        { name: "Puttparty", value: "puttparty" },
        { name: "Ocho", value: "ocho" },
      ]
    },
  ],

  run: async (client, interaction) => {
    try {
      const discordTogether = new DiscordTogether(client),
        { options } = interaction,
        activity = options.getString("activity"),
        channel = options.getChannel("channel"),
        Response = client.Embed();
      if (channel.type !== ChannelType.GuildVoice) return interaction.reply({
        embeds: [client.Embed(false).setDescription(`Select a Voice Channel!`)]
      })
      
      switch (activity) {
        case "youtube": {
          Response.setTitle("Youtube");
          discordTogether.createTogetherCode(channel.id, 'youtube').then(x => {
            Response.setDescription(`[Click to watch youtube in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "wordsnack": {
          Response.setTitle("Word Snack");
          discordTogether.createTogetherCode(channel.id, 'wordsnack').then(x => {
            Response.setDescription(`[Click to play wordsnack in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "sketchheads": {
          Response.setTitle("Sketch Heads");
          discordTogether.createTogetherCode(channel.id, 'sketchheads').then(x => {
            Response.setDescription(`[Click to play Sketch Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "chess": {
          Response.setTitle("Chess");
          discordTogether.createTogetherCode(channel.id, 'chess').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "poker": {
          Response.setTitle("Poker");
          discordTogether.createTogetherCode(channel.id, 'poker').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "checkers": {
          Response.setTitle("Checkers");
          discordTogether.createTogetherCode(channel.id, 'checkers').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "betrayal": {
          Response.setTitle("Betrayal");
          discordTogether.createTogetherCode(channel.id, 'betrayal').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "fishing": {
          Response.setTitle("Fishing");
          discordTogether.createTogetherCode(channel.id, 'fishing').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "lettertile": {
          Response.setTitle("Lettertile");
          discordTogether.createTogetherCode(channel.id, 'lettertile').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "doodlecrew": {
          Response.setTitle("Doodlecrew");
          discordTogether.createTogetherCode(channel.id, 'doodlecrew').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "spellcast": {
          Response.setTitle("Spellcast");
          discordTogether.createTogetherCode(channel.id, 'spellcast').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "awkword": {
          Response.setTitle("Awkword");
          discordTogether.createTogetherCode(channel.id, 'awkword').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "puttparty": {
          Response.setTitle("Puttparty");
          discordTogether.createTogetherCode(channel.id, 'puttparty').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
        case "ocho": {
          Response.setTitle("Ocho");
          discordTogether.createTogetherCode(channel.id, 'ocho').then(x => {
            Response.setDescription(`[Click to play Chess Heads in ${channel}](${x.code})`)
            return interaction.reply({ embeds: [Response] })
          })
        } break;
      }
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
}