# Discord-Music-Bot
A discord bot made with Discord.js that plays music

## Requirements

- [Node](https://nodejs.org/en/) - Version 16 or higher
- [FFMPEG](https://www.ffmpeg.org/)

# Installation

```
# Install the dependencies
npm install

# Configure Discord Bot Token
 In .env 
 TOKEN=INSERT_YOUR_TOKEN_HERE
 CLIENT_ID=INSERT_YOUR_CLIENT_ID_HERE
```

# Required permissions

Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tab on the [developer portal](https://discord.com/developers/applications/)

Enable the `Server Members Intent` and `Message Content Intent` which can be found under the `Bot` tab on the [developer portal](https://discord.com/developers/applications/)

# Starting the application

```
node index.js
```

# Features & Commands

- /help - Shows you a list of commands

- /play
  - song {url}       - plays the song from the youtube url
  - search {keyword} - searches for the keyword on youtube and plays the first result
  - playlist {url}   - plays the playlist from url

- /pause - Pause the music

- /skip - Skip the current song

- /resume - Resume the music

- /queue - Shows the queue

- /exit - Leave the voice channel

# Common errors

Here is a list of common errors and how you can fix them.

# Dependencies aren't up to date

The packages used in this repository get updated often. That is why it is always worth a try updating those if you get an error like `invalid URL: undefined` or when the bot crashes when running the play command.

# FFMPEG is not installed on the machine running the bot

The `?play song` command requires FFMPEG to be installed on the machine that is running the bot. You can download it on the official [FFMPEG website](https://www.ffmpeg.org/).
