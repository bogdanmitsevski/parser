import { Customer } from '../models/models';
import puppeteer from 'puppeteer';
class customerClass {
    async parseCustomersFunc() {
        try {
            let customerArray: any = [];
            const browser = await puppeteer.launch({
                headless: false
            });
            const page = await browser.newPage();
            await page.goto('https://eventsoft.com.ua', { waitUntil: 'domcontentloaded' });
            await page.waitForTimeout(3000);
            await page.click('#navbar > .navbar-right > li:nth-child(5) > .page-scroll:last-child');
            for (let i = 1; i <= 4; i++) {
                await page.waitForTimeout(3000);
                await page.$eval(`#pricing .container .col-lg-3:nth-child(${i}) > p`, (e: any) => e.innerText).then((value: any) => {
                    customerArray.push(value);
                }).catch(function (e: any) {
                    console.log(e);
                });
            }
            await browser.close();
            return customerArray;
        }
        catch (e) {
            console.log(e);
        }
    };
};

export default new customerClass();