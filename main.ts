import * as fs from 'fs';
import * as Discord from 'discord.js';
import fromFakku from './fakku'
import from2DMarket from './2DMarket'
import fromProjectHentai from './projectHentai'
const client = new Discord.Client();
const bot_token : string = fs.readFileSync('bot-token.txt', 'utf8').trim();

interface site {
	name: string;
	getMangaByAuthor: (author: string) => Promise<string[]>;
}

let sites : site[] = [
	{name: 'Fakku', getMangaByAuthor: fromFakku},
	{name: '2D Market', getMangaByAuthor: from2DMarket},
	{name: 'Project Hentai', getMangaByAuthor: fromProjectHentai}
];

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
		for(let i of [1, 3]) {
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

});

client.login(bot_token);
