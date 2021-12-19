module.exports.config = {
	name: "addlinkword",
	version: "1.0.0",
	hasPermssion: 0, 
	credits: "BerVer",
	description: "Nối từ với Bot",
	commandCategory: "group",
	usages: "addlinkword [từ]",
	cooldowns: 1,
	dependencies: ["axios"],
	info: [
		{
			key: 'Từ',
			prompt: '',
			type: 'Văn Bản',
			example: 'addlinkword ngốc nghếch'
		},
	],
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};
module.exports.run = async function({ api, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
    const axios = require("axios");
    var a = (await axios.get(`https://api.simsimi.tk/api/linkword?add=${encodeURIComponent(args.join(" "))}`)).data;
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
    out(a.text)
}

