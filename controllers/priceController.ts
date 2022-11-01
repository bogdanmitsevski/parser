class priceController {
    async addPrice (ctx:any, next:any) {
        try {
            ctx.body = 'Hello, /addPrice';
        }
        catch(e) {
            console.log(e);
        }
    }
}

export default new priceController();