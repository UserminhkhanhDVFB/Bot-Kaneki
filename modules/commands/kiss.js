const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "kiss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hungcatmoi",
  description: "Hôn người bạn tag",
  commandCategory: "general",
  usages: "kiss [tag người bạn cần Hôn]",
  cooldowns: 5,
};

module.exports.run = function({
  api,
  event,
  args
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://apikiss.adtnhom.repl.co', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", Cho hôn 1 phát thôi ❤️",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/kiss.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kiss.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/kiss.${ext}`)).on("close", callback);
  });
}