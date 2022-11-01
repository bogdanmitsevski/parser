import puppeteerClass from '../parser/parser';
class customerController {
    async parseTechnologies (ctx:any, next:any) {
        try {
           puppeteerClass.parserFunc();
        }
        catch(e) {
            console.log(e);
        }
    }
}

export default new customerController();