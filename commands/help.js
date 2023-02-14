const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Shows the Help Menu"),
	execute: async ({ client, interaction }) => {        
        const helpEmbed = new EmbedBuilder()
            .setColor(16706535)
            .setTitle('Help Menu')
            .addFields(
            { name: "Here's a list of things I can do: ", value: "List of commands:"},
                { name: '/help', value: 'Shows you this menu.'},
                { name: '/play song', value: 'Plays the song from the youtube url!'},
                { name: '/play search', value: 'Searches for the keyword on youtube and plays the first result!'},
                { name: '/play playlist', value: 'Plays the playlist from url!'},
                { name: '/pause', value: 'Pause the music!'},
                { name: '/skip', value: 'Skip the current song!'},
                { name: '/queue', value: 'Shows the queue!'},
                { name: '/resume', value: 'Resume the music!'},
                { name: '/exit', value: 'Leave the voice channel!'},
            )
            .setThumbnail('https://i.imgur.com/xLbEPdp.jpeg ')
            .setTimestamp()
            .setFooter({ text: 'Made by NotNathan'});
        // Respond with the embed containing information about the player
        await interaction.reply({
            embeds: [helpEmbed]
        })
	},
}