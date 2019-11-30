import * as fs from 'fs';
import * as Discord from 'discord.js';
const client = new Discord.Client();
const bot_token : string = fs.readFileSync('bot-token.txt', 'utf8').trim();

client.on('ready', () => {
	console.log("bot running");
});

client.on('message', msg => {
	const { content } = msg;
	if(!RegExp(String.raw`\.lc(:?\s+.*)?$`).test(content))
		return;
	let author : string = null,
		title : string = null;
	let match1 = RegExp(String.raw`\.lc\s+"([^"]+)"\s+"([^"]+)"$`)
		.exec(content);
	let match2 = RegExp(String.raw`\.lc\s+-(.)\s+(.+)\s+-(.)\s+(.+)$`)
		.exec(content);

	if(match1) {
		author = match1[1];
		title = match1[2];
	} else if(match2)
		for(let i = 1; i <= 3; ++i) {
			if(match2[i] == 'a')
				author = match2[i+1];
			else if(match2[i] == 't')
				title = match2[i+1];
		}
	if(!author || !title) {
		msg.reply('invalid command. ' +
			'Usage: `.lc "author" "title"` or `.lc -a author -t title`');
		return;
	}
	console.log(author);
	console.log(author.length);
	console.log(title);
	console.log(title.length);
});

client.login(bot_token);
