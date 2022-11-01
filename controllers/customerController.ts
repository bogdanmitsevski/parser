class customerController {
    async getCustomer(ctx:any, next:any) {
        try {
            ctx.body = "Hello, /getCustomer";
        }
        catch(e) {
            console.log(e);
        }
    };

    async addCustomers(ctx:any, next:any) {
        try {
            ctx.body = "Hello, /addCustomer";
        }
        catch(e) {
            console.log(e);
        }
    }
};

export default new customerController();