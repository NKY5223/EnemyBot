const Discord = require("discord.js");
const EMOJIS = require("../lib/emojis");
const NAMES = require("../lib/names");
const randomCell = require("../lib/randomCell");

/** @type { import("../index").CommandFunc } */
module.exports = (message, _c, _a, data, _t, _p, setData) => {
    const inv = data[message.author.id].inventory.items;

    const cell = randomCell();

    if (cell in inv) inv[cell]++;
    else inv[cell] = 1;

    message.channel.send(`You found ${NAMES[cell][2]} ${NAMES[cell][0]}! ${EMOJIS[cell]}`);

    setData();
};