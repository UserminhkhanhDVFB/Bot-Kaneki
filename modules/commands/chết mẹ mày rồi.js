module.exports.config = {
    name: "chết mẹ mày rồi",
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
    if (!fs.existsSync(dirMaterial + "cmmr.mp4")) request("").pipe(fs.createWriteStream(dirMaterial + "cmmr.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: ``,
                attachment: fs.createReadStream(__dirname + `/noprefix/cmmr.mp4`)
            }
    if (event.body.toLowerCase() == "cmmr"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Cmmr"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chết mẹ mày rồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}    
    if (event.body.toLowerCase() == "Chết mẹ mày rồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);} 
    if (event.body.toLowerCase() == "Chết mm rồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}       
    if (event.body.toLowerCase() == "chết mm rồi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chết mm r"){
        return api.sendMessage(msg,event.threadID,event.messageID);}    
    if (event.body.toLowerCase() == "Chết mm r"){
        return api.sendMessage(msg,event.threadID,event.messageID);}    
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }