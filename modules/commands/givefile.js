module.exports.config = {
	name: 'givefile',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'NTKhang mod by Dyy',
	description: '',
	commandCategory: 'admin',
	usages: 'Chỉ Cho 1 Mình Dyy Dùng',
	cooldowns: 5,
	dependencies: {"fs-extra":""}
};

module.exports. run = async ({ args, api, event }) => {
	const fs = global.nodemodule["fs-extra"];
	const permission = ["100058779052162"];
	if (!permission.includes(event.senderID)) return api.sendMessage("_callad Cảnh Báo‼️ Cảnh Báo‼️ Có Người Trộm Modules", event.threadID, event.messageID);
	var path = [],
		pathrn = [],
		pathrntxt = [];
	var msg = '';
	var notfound = "";
	for(let file of args) {
	 if(!fs.existsSync(__dirname+"/"+file)) {
	   notfound += 'Cậu Chơi Đồ Hả Cậu? Làm Gì Có File: '+file;
	   continue;
	 };
		if (file.endsWith('.js')) {
			fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
			pathrn.push(
				fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
			);
			pathrntxt.push(file.replace('.js', '.txt'));
		} else {
			path.push(fs.createReadStream(__dirname + '/' + file));
		}
	}

	var mainpath = [...path, ...pathrn];
	if (pathrn.length != 0)
		msg += 'Húp Đi, File Không Ngon Đâu:))';
	api.sendMessage({ body: msg+"\n"+notfound, attachment: mainpath }, event.threadID);
	pathrntxt.forEach(file => {
		if (fs.existsSync(__dirname + '/' + file)) fs.unlinkSync(__dirname + '/' + file);
	});
};