require('dotenv').config();

const {REST} = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const { Player } = require("discord-player")

const fs = require('fs');
const path = require('path');


const client = new Client({intents: [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
],
});

// List of all commands
const commands = [];
client.commands = new Collection();

const helpEmbed = new EmbedBuilder()
  .setColor(16706535)
    .setTitle('Help Menu')
    .addFields(
    { name: "Here's a list of things I can do: ", value: "List of commands:"},
        { name: '?help', value: 'Shows you this menu.'},
        { name: '?play', value: 'Play a song!'},
        { name: '?pause', value: 'Pause the music!'},
        { name: '?skip', value: 'Skip the current song!'},
        { name: '?queue', value: 'Shows the queue!'},
        { name: '?resume', value: 'Resume the music!'},
        { name: '?exit', value: 'Leave the voice channel!'},
    )
    .setThumbnail('https://i.imgur.com/xLbEPdp.jpeg ') 
    .setTimestamp()
    .setFooter({ text: 'Made by NotNathan24'});

    const prefix="?"

const commandsPath = path.join(__dirname, "commands"); // C:\Discord Music Bot\commands
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

// Add the player on the client
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})

client.on("ready", () => {
    // Get all ids of the servers

    client.user.setPresence({ activities: [{ name: '?help' }], status: 'online' });

    const guild_ids = client.guilds.cache.map(guild => guild.id);


    const rest = new REST({version: '9'}).setToken(process.env.TOKEN);
    for (const guildId of guild_ids)
    {
        rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId), 
            {body: commands})
        .then(() => console.log('Successfully updated commands for guild ' + guildId))
        .catch(console.error);
    }
});

client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if(!command) return;

    try
    {
        await command.execute({client, interaction});
    }
    catch(error)
    {
        console.error(error);
        await interaction.reply({content: "There was an error executing this command"});
    }
});

client.on("messageCreate", message => {
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command == "help") {
    message.reply({ embeds: [helpEmbed] });
  }
})

client.login(process.env.TOKEN);
