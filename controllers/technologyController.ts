import technologyFunc from '../parser/parserTechnology';
class customerController {
    async parseTechnologies (ctx:any, next:any) {
        try {
           technologyFunc.parserFunc();
        }
        catch(e) {
            console.log(e);
        }
    }
}

export default new customerController();