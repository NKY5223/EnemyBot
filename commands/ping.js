const Discord = require("discord.js");

/** @type {import("../index").CommandFunc} */
module.exports = message => {
    message.channel.send(new Discord.MessageEmbed()
        .setTitle("🏓 Ping...")
        .setColor("#E82727")
    ).then(ping => {
        ping.edit(new Discord.MessageEmbed()
            .setTitle("🏓 Pong!")
            .setDescription(`Latency: ${ping.createdTimestamp - message.createdTimestamp}ms\nAPI Latency: ${message.client.ws.ping}ms`)
            .setColor("#E82727")
        );
    });
}