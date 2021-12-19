module.exports.config = {
  name: "ngiuad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Nguyễn Trà My",
  commandCategory: "Random-img",
  usages: "ngiuad",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const permission = ["100058779052162"];
	if (!permission.includes(event.senderID)) return api.sendMessage("_callad Cảnh Báo‼️ Cảnh Báo‼️ Có Người Trộm Modules", event.threadID, event.messageID);
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apinyquyen.adtnhom.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Người yêu admin nè <3\n🌸Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/ngiuad.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ngiuad.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/ngiuad.${ext}`)).on("close", callback);
      })
}