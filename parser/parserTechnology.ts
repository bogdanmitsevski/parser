import puppeteer from 'puppeteer';
class parseTech {
    async parseTechnologyFunc() {
        try {
            let technologyArray: any = [];
            const browser = await puppeteer.launch({
                headless: false
            });
            const page = await browser.newPage();
            await page.goto('https://eventsoft.com.ua/', { waitUntil: 'domcontentloaded' });
            await page.waitForTimeout(3000);
            for (let i = 1; i <= 3; i++) {
                page.$eval(`.row > .col-sm-4:nth-child(${i}) > h2:first-child`, (e: any) => e.innerText).then((value: any) => {
                    technologyArray.push(value);
                }).catch(function (e: any) {
                    console.log(e);
                });
            }
            await browser.close();
            return technologyArray;
        }
        catch (e) {
            console.log(e);

        }
    }
}

export default new parseTech();