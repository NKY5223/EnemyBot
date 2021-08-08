const EMOJIS = require("../lib/emojis");
const Discord = require("discord.js");

/** @type { import("../index").CommandFunc } */
module.exports = (message, _c, _a, data, _t, _p, setData) => {
    if (!(message.mentions.users.size && !message.mentions.users.first().bot)) return;
    const embed = new Discord.MessageEmbed()
        .setTitle(`Are you sure you want to reset ${message.mentions.users.first().tag}'s inventory?`)
        .setAuthor("⚠️ DANGER")
        .setDescription("This action is irreversible!")
        .setColor("#E82727");

    message.channel.send(embed).then(confirmMsg => {
        confirmMsg.react("✅").then(() => confirmMsg.react("❌"));
        confirmMsg.awaitReactions(
            (reaction, user) => (reaction.emoji.name === "✅" || reaction.emoji.name === "❌") && user.id === message.author.id,
            { max: 1, time: 60000 }
        ).then(collected => {
            let reaction = collected.first();
            if (reaction.emoji.name === "✅") {
                data[message.mentions.users.first().id].inventory.items = {};
                setData();
                confirmMsg.edit(new Discord.MessageEmbed()
                    .setTitle(`${message.mentions.users.first().tag}'s inventory has been reset.`)
                    .setColor("#E82727")
                )
            } else {
                confirmMsg.edit(new Discord.MessageEmbed()
                    .setTitle("Cancelled reset.")
                    .setColor("#E82727")
                )
            }
        }).catch(console.error);
    });
};