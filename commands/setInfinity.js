const Discord = require("discord.js");
const EMOJIS = require("../lib/emojis");
const NAMES = require("../lib/names");

/** @type { import("../index").CommandFunc } */
module.exports = (message, _c, [item], data, _t, _p, setData) => {
    if (!item) {
        message.channel.send(new Discord.MessageEmbed()
            .setDescription("what do i set to infinity lol")
            .setColor("#E82727")
        );
        return;
    }
    if (!(item in NAMES)) {
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Item \`${item}\` does not exist.`)
            .setColor("#E82727")
        );
        return;
    }
    if (!message.client.user.id in data) data[message.client.user.id] = { inventory: { name: "VeryEpicEnemyBot's Bank", items: {} }, cooldowns: {} };
    data[message.client.user.id].inventory.items[item] = "Infinity";
    setData();

    message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**<@!${message.client.user.id}> now has Infinite ${NAMES[item][1]} ${EMOJIS[item]}**`)
        .setColor("#E82727")
    );
};