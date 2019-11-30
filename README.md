# license-checker
Checks if a particular manga is licensed in English by looking it up on a given set of sites. The user interface is a Discord bot.
## Dependencies
* nodejs >= 10.0.0
* npm
* TypeScript
* Firefox
* [geckodriver](https://github.com/mozilla/geckodriver/releases)
## Setup
* Create bot-token.txt and put your token in there
* Download the tensorflow model
	* install *tensorflowjs* through pip
	* run the following command  
	```
	tensorflowjs_converter \
		-input_format=tf_hub \
		'https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1' \
		/mobilenet/web_model
	```
* Run `npm install`
	* Ignore any warnings about unmet peer dependencies, as they're all optional.
* Run `tsc`
## Running
* Run `nodejs main.js`
* Give the Discord bot commands of the form `.lc "author" "title"` or `.lc -a author -t title`
## Sites and status
* [2DMarket](http://2d-market.com/): Works in progress. Requires site login to search.
* [Comic Bavel](https://comicbavel.com/): No English version exists.
* Comic Europa: Official site possibly [here](http://comicbavel.com/europa/)? No English versions though.
* Comic Hana-Man: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* Comic Kairakuten: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* Comic Kairakuten Beast: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* Comic Koh: Can't find official site?
* Comic Shitsurakuten: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* Comic X-Eros: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* [Fakku](https://www.fakku.net/): Work in progress.
* Girls forM: Can't find official site?
* Hana-Man Gold: Published through [Wanimagazine](https://www.wani.com/) which has no English site.
* [Project Hentai](https://www.projecthentai.com/); work in progress.
* ENSHODO: Closed permanently. [Source](https://www.twipu.com/patinafinish/tweet/1167021110849703937)
## Examples
TODO
