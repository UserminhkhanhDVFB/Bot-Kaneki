module.exports.config = {
    name: "bắn",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kaneki",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bắn.gif")) request("").pipe(fs.createWriteStream(dirMaterial + "bắn.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: ``,
                attachment: fs.createReadStream(__dirname + `/noprefix/bắn.gif`)
            }
    if (event.body.toLowerCase() == "bắn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Bắn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bùm"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Bùm"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }