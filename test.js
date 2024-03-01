const DrawZoneJS = require("./index.js");
const bot = new DrawZoneJS.Client({
    ws: "ws://localhost:3000/"
});

bot.on("join", async () => {
    bot.chat.send("Hello world!");

    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            bot.world.setPixel(x, y, [0, 0, 0]);
        }
    }
});