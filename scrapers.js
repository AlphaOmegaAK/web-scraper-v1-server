const puppeteer = require('puppeteer');

// async function scrapeChannel(url) {
//     // ! 1. Always launch browers first
//     const browser = await puppeteer.launch();
//     // ! 2. Open a new page
//     const page = await browser.newPage();
//     // ! 3. Navigate to page
//     await page.goto(url);

//     // Xpath function
//     const [el] = await page.$x();
//     const text = await el.getProperty('textContent');
//     const name = await text.jsonValue();

//     const [el2] = await page.$x('//*[@id="img "]');
//     const src = await el.getProperty('src');
//     // const urlAvatar = await src.jsonValue();

//     browser.close();

//     console.log(urlAvatar);
//     return {
//         name,
//         // urlAvatar
//     };
// };

// scrapeChannel('https://www.youtube.com/channel/UCKOvOaJv4GK-oDqx-sj7VVg')

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.screenshot({
        path: 'google.png'
    });

    await browser.close();
})();