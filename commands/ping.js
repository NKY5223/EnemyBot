const Discord = require("discord.js");

/** @type {import("../index").CommandFunc} */
module.exports = message => {
    message.channel.send("🏓 Pinging...").then(ping => {
        ping.edit(new Discord.MessageEmbed()
            .setTitle("🏓 Pong!")
            .setDescription(`Latency: ${ping.createdTimestamp - message.createdTimestamp}\nAPI Latency: ${message.client.ws.ping}`)
        );
    });
}