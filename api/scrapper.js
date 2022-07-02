const cheerio = require('cheerio');
const axios = require('axios');

async function latest() {

    let news = []

    res = await axios.get(`https://www.foxnews.com/`)
    const body = await res.data;
    const $ = cheerio.load(body)

    let articles = $('#wrapper > div > div.page-content > div.row.sticky-columns > main article')
    $(articles).each((index, element)=>{
        const title = $(element).find('h2').text()
        const image = $(element).find('img').attr('src')
        const link = $(element).find('a').attr('href')
        news.push({title, image, link})
    })


    return await (news)

}

module.exports = {
	latest
}