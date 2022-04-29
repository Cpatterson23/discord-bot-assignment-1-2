import discord, { GuildMember, TeamMember } from "discord.js"
const token = "OTY5MzgwNzI3MTk4MjA4MDAw.YmskJw.1Fb_kbJlVFI12yBLyOb0RFY7tH8";
const client = new discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES" ],
});

function onReady(client) {
    console.log("member is ready");
}

/**
 * 
 * @param {discord.Message} message 
 */


function onMessage(message) {
   if (message == "ping");
   console.log("pong");
}

client.on("messageCreate", onMessage);
client.on("ready",onReady)
client.login(token);
