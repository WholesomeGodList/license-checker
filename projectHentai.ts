export default
async function getManga(author: string) : Promise<string[]> {
	throw Error("Not yet implemented");
	//TODO deal with iframes
}

if(require.main == module) {
	if(process.argv.length != 3) {
		console.error('usage: nodejs projectHentai "author name"');
		process.exit(1);
	}
	getManga(process.argv[1]).catch(e => console.error(e));
}
