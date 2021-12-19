module.exports.config = {
  name: "callad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang fix by Jukie",
  description: "thông báo lỗi của bot đến admin hoặc góp ý",
  commandCategory: "Tiện ích",
  usages: "[lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
  var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "📄𝙋𝙝ả𝙣 𝙝ồ𝙞 𝙩ừ "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "calladmin"}))
     }
   break;}
    case "calladmin": {
      api.sendMessage({ body: `📢𝙋𝙝ả𝙣 𝙝ồ𝙞 𝙩ừ 𝙖𝙙𝙢𝙞𝙣 ${name} đế𝙣 ${name}:\n◆━━━━━━━━━━━━━◆\n${event.body}\n◆━━━━━━━━━━━━━◆\n»📌𝙋𝙝ả𝙣 𝙝ồ𝙞 𝙩𝙞𝙣 𝙣𝙝ắ𝙣 𝙣à𝙮 để 𝙩𝙞ế𝙥 𝙩ụ𝙘 𝙜ử𝙞 𝙗á𝙤 𝙘á𝙤 𝙫ề 𝘼𝙙𝙢𝙞𝙣`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID,
  type: "reply"}), handleReply.messID);
   break;}
     
     }
  
  
};

module.exports.run = async function({ api, event, args, Users }) {
  if (!args[0])
    return api.sendMessage(
      "𝘽ạ𝙣 𝙘𝙝ư𝙖 𝙣𝙝ậ𝙥 𝙣ộ𝙞 𝙙𝙪𝙣𝙜 𝙘ầ𝙣 𝙗á𝙤 𝙘á𝙤",
      event.threadID,
      event.messageID
    );
  //var data = await api.getUserInfo(event.senderID); 
  var name = (await Users.getData(event.senderID)).name;
  var idbox = event.threadID;
 // const url = (api.getCurrentUserID(event.senderID));
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
  api.sendMessage(
    "Đã 𝙜ử𝙞 𝙗á𝙤 𝙘á𝙤 đế𝙣 𝙖𝙙𝙢𝙞𝙣 𝙗𝙤𝙩",
    event.threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`📢𝘽á𝙤 𝙘á𝙤 𝙩ừ: ${name}\n💤𝘽𝙤𝙭: ${namethread}\n💦𝙄𝘿 𝙗𝙤𝙭: ${idbox}\n◆━━━━━━━━━━━━━◆\n❗𝙇ỗ𝙞: ${args.join(
            " "
          )}\n◆━━━━━━━━━━━━━◆\n⏱𝙏𝙞𝙢𝙚: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};