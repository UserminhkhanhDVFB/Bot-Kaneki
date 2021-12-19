module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Quyền Kaneki ",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 10
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "╭───╮\n    %1\n╰───╯ \n📜𝙈ô 𝙩ả: %2\n\n➢ 🧞𝘾𝙧𝙚𝙙𝙞𝙩: 『%7』\n➢ ✍️𝙃ướ𝙣𝙜 𝙙ẫ𝙣 𝙘á𝙘𝙝 𝙙ù𝙣𝙜: %3\n➢ 📝𝙏𝙝𝙪ộ𝙘 𝙣𝙝ó𝙢: %4\n➢ ⏱𝙏𝙝ờ𝙞 𝙜𝙞𝙖𝙣 𝙘𝙝ờ: %5 𝙜𝙞â𝙮(𝙨)\n➢ 👥𝙌𝙪𝙮ề𝙣 𝙝ạ𝙣: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n📣Đ𝒄 Đ𝒊𝒆̂̀𝒖 𝑯𝒂̀𝒏𝒉 𝑩𝒚 𝙌𝙪𝙮ề𝙣 𝙆𝙖𝙣𝙚𝙠𝙞💕",
		"helpList": '≻───── •👇🏻• ─────≺\n📈𝙃𝙞ệ𝙣 𝙩ạ𝙞 đ𝙖𝙣𝙜 𝙘ó %1 𝑳𝒆̣̂𝒏𝒉 𝑪𝒐́ 𝑻𝒉𝒆̂̉ 𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈 𝑻𝒓𝒆̂𝒏 𝑩𝒐𝒕 𝑵𝒂̀𝒚\n𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈 『%2𝙝𝙚𝙡𝙥 + 𝑻𝒆̂𝒏 𝑳𝒆̣̂𝒏𝒉』 Đ𝒆̂̉ 𝑿𝒆𝒎 𝑪𝒉𝒊 𝑻𝒊𝒆̂́𝒕 𝑪𝒂́𝒄𝒉 𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈\n🐳𝑩𝒐𝒕 Đ𝒖̛𝒐̛̣𝒄 Đ𝒊𝒆̂̀𝒖 𝑯𝒂̀𝒏𝒉 𝑩𝒚 ❤𝙌𝙪𝙮ề𝙣 𝙆𝙖𝙣𝙚𝙠𝙞❤\n[🐳]Đâ𝙮 𝙡à 𝙩𝙤à𝙣 𝙗ộ 𝙡ệ𝙣𝙝[❗]\n📣𝙑𝙪𝙞 𝙡ò𝙣𝙜 𝙠𝙝ô𝙣𝙜 𝙨𝙥𝙖𝙢[❗]',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}
module.exports.handleEvent = function ({ api, event, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	const folderimg = __dirname + "/cache/help";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	
	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const folderimg = __dirname + "/cache/help";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		group.forEach(commandGroup => msg += `🐳『${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}』🐳\n${commandGroup.cmds.join(', ')}\n\n`);
		return api.sendMessage({body: msg + getText("helpList", commands.size, prefix), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 25000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
    }