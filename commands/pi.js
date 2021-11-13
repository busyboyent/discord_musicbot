const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('да')
		.setDescription('Replies with да!'),
	async execute(interaction) {
		return interaction.reply('Pizda!');
	},
};