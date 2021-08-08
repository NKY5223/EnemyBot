const Discord = require("discord.js");
const EMOJIS = require("../lib/emojis");
const NAMES = require("../lib/names");
const order = ["mover", "generator", "push", "slide", "rotator", "rotator_ccw", "trash", "enemy"];

/** @type { import("../index").CommandFunc } */
module.exports = (message, _c, [id], data, _t, prefix) => {
    let avatar;
    let username;
    if (!id) {
        const member = message.member;
        id = member.id;
        username = member.user.username;
        avatar = member.user.avatarURL();
    } else if (isNaN(id)) {
        if (message.mentions.members.size) {
            const member = message.mentions.members.first();
            id = member.id;
            username = member.user.username;
            avatar = member.user.avatarURL();
            if (member.user.bot) {
                if (member.user.id !== "862698871624957982") {
                    message.channel.send(new Discord.MessageEmbed()
                        .setTitle(`${member.nickname || member.user.username} is a bot.`)
                        .setFooter("Bots don't have banks!")
                        .setColor("#E82727")
                    );
                    return;
                }
            }
        } else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle(`Can't find user ${id}`)
                .setColor("#E82727")
            );
            return;
        }
    }
    if (id in data) {
        const { name, items } = data[id].inventory;
        if (Object.entries(items).filter(([n, _c]) => order.includes(n)).reduce((a, [_n, c]) => a && c, true)) {
            message.channel.send(new Discord.MessageEmbed()
                .setAuthor(`${name} (×${order.map(cell => items[cell]).filter(n => n && n > 0).reduce((a, count) => a + Number(count), 0)})`, avatar)
                .setColor("#E82727")
                .setDescription(order.map(cell => {
                    if (!items[cell]) return false;
                    let count = items[cell];
                    return `**${count < 0 ? `[DEBT] ${-count}` : count}** ${NAMES[cell][count === 1 ? 0 : 1]} ${EMOJIS[cell]}`;
                }).filter(s => s).join("\n"))
            );
        } else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle(`${name} (×0)`)
                .setDescription("Wow, such empty.")
                .setFooter(`Use ${prefix}search to find cells.`)
                .setColor("#E82727")
            );
        }
    } else {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${username || id}'s Bank (×0)`)
            .setDescription("Wow, such empty.")
            .setFooter(`Use ${prefix}search to find cells.`)
            .setColor("#E82727")
        );
    }
};