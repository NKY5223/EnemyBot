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
    if (!"862698871624957982" in data) data["862698871624957982"] = { inventory: { name: "VeryEpicEnemyBot's Bank", items: {} }, cooldowns: {} };
    data["862698871624957982"].inventory.items[item] = "Infinity";
    setData();

    message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**<@!862698871624957982> now has Infinite ${NAMES[item][1]} ${EMOJIS[item]}**`)
        .setColor("#E82727")
    );
};