module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run =
const permission =
 ({event, api}) =>api.sendMessage("Bye Bitch ✅",event.threadID, () =>process.exit(0))