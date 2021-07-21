const Discord = require("discord.js");
const NAMES = require("../lib/names");
const EMOJIS = require("../lib/emojis");

/** @type {import("../index").CommandFunc} */
module.exports = (message) => {
    message.channel.send(new Discord.MessageEmbed()
        .setTitle("Items:")
        .setDescription(Object.entries(NAMES).map(([item, name]) => `Internal: ${item}; Display: ${name[0]}; Emoji: ${EMOJIS[item] || "[MISSING]"}`).join("\n"))
        .setColor("#E82727")
    );
};