const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } = require('discord.js');

const permissions = require(`${process.cwd()}/src/validator/permissions`);
require("colors")

module.exports.parsePermissions = parsePermissions;

// parsePermissions
function parsePermissions(perms) {
  const permissionWord = `permission${perms.length > 1 ? "s" : ""}`;
  return perms.map((perm) => `\`${permissions[perm]}\` `).join(", ") + permissionWord;
}

async function helpComponentBuilder(includeSelectMenu) {
  let menu = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Nothing selected')
        .addOptions(
          {
            label: '👾 Fun',
            description: 'Commands related to fun',
            value: 'help_Fun',
          },
          {
            label: '🤖 Info',
            description: 'Commands related to info',
            value: 'help_Info',
          },
           {
            label: '🛎 Uptime',
            description: 'Commands related to uptime',
            value: 'help_Uptime',
          },
           {
            label: '🔘 Utility',
            description: 'Commands related to utility',
            value: 'help_Utility',
          },
        ),
      )
  let buttons1 = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setEmoji('1036646129238028379')
        .setLabel('Website')
        .setStyle(ButtonStyle.Link)
        .setURL('https://uptimer.lol'),
      new ButtonBuilder()
        .setEmoji('882684602639081492')
        .setLabel('Support Server')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/p57Y2dvJzx'),
      new ButtonBuilder()
        .setEmoji('882683102890197062')
        .setLabel('Invite Me')
        .setStyle(ButtonStyle.Link)
        .setURL('https://uptimer.lol/invite'),
    )
  return [menu, buttons1]
}
  module.exports = {helpComponentBuilder}