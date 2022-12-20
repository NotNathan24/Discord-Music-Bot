# Discord-Music-Bot
A discord bot made with Discord.js that plays music

# Setup

Step 1: 
Make sure `node.js`, `Visual Studio Code` and `ffmpeg` are installed

Install packages:
```
npm install discord.js
```
```
npm install @discordjs/builders
```
```
npm install @discordjs/opus
```
```
npm install @discordjs/rest
```
```
npm install @discordjs/voice
```
```
npm install discord-api-types
```
```
npm install discord-player
```
```
npm install dotenv --save
```

If you get a package install error delete: package.json and package-lock.json and reinstall the packages

Step 2:

Go to file called .env

Then put:

TOKEN=Put your token here

CLIENT_ID=Put client token here

Step 3:

Open New Terminal:

Type:

node index.js

# Commands

- ?help - Shows you a list of commands

- ?play
  - song {url}       - plays the song from the youtube url
  - search {keyword} - searches for the keyword on youtube and plays the first result
  - playlist {url}   - plays the playlist from url

- ?pause - Pause the music

- ?skip - Skip the current song

- ?resume - Resume the music

- ?queue - Shows the queue

- ?exit - Leave the voice channel
