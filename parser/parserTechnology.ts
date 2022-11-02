import puppeteer from 'puppeteer';
import { Technology } from '../models/models';
import checkTechnology from '../checkTechnology/checkTechnology';
class technologyFunc {
    async parserFunc() {
        try {
            const browser = await puppeteer.launch({
                headless: false
            });
            const page = await browser.newPage();
            await page.goto('https://eventsoft.com.ua/', { waitUntil: 'domcontentloaded' });
            await page.waitForTimeout(3000);
            for (let i = 1; i <= 3; i++) {
                page.$eval(`.row > .col-sm-4:nth-child(${i}) > h2:first-child`, (e: any) => e.innerText).then((value: any) => {
                    console.log(value, typeof (value));
                    checkTechnology(value);
                    const newTechnology: any = Technology.create({
                        name: value,
                        addedBy: 2
                    });
                    newTechnology.save();
                }).catch(function (e: any) {
                    console.log(e);
                });
            }
            await browser.close();
        }
        catch (e) {
            console.log(e);

        }
    }
}

export default new technologyFunc();