module.exports.config = {
    name: "đức bo",
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
    if (!fs.existsSync(dirMaterial + "ducbo.mp4")) request("").pipe(fs.createWriteStream(dirMaterial + "ducbo.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: ``,
                attachment: fs.createReadStream(__dirname + `/noprefix/ducbo.mp4`)
            }
    if (event.body.toLowerCase() == "bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Đức Bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}    
    if (event.body.toLowerCase() == "đức bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);} 
    if (event.body.toLowerCase() == "Trần Đức Bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}       
    if (event.body.toLowerCase() == "trần đức bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đức Bo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}  
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }