const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Example Command"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
