export default
async function getMangaByAuthor(author: string) : Promise<string[]> {
	throw Error("Not yet implemented");
}

if(require.main == module) {
	if(process.argv.length != 3) {
		console.error('usage: nodejs projectHentai "author name"');
		process.exit(1);
	}
	getMangaByAuthor(process.argv[1]).catch(e => console.error(e));
}
