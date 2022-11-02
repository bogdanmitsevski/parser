import customerClass from '../parser/parserCustomers';
import { Customer } from '../models/models';
import { Technology } from '../models/models';
import { Price } from '../models/models';
class customerController {
    async getCustomer(ctx:any, next:any) {
        try {
            const id = ctx.request.body.id;

            const findCustomerById:any = await Customer.findOne({
                where: {id:id}
            });

            const findTechnologyById:any = await Technology.findOne({
                where: {id:id}
            });

            const findPriceById:any = await Price.findOne({
                where: {id:id}
            });

            const currentCustomer = findCustomerById.name;
            const currentTechnology = findTechnologyById.name;
            const currentPrice = findPriceById.numeric;

            if(!findCustomerById || !findTechnologyById || !findPriceById) {
                ctx.body = 'Please, CHECK if ID is correct';
            }

            else {
                ctx.body = `Customer: ${currentCustomer} got project with Technology: ${currentTechnology} by Price: $${currentPrice}`;
            }
        }
        catch(e) {
            console.log(e);
        }
    };

    async addCustomers(ctx:any, next:any) {
        try {
            customerClass.purseCustomers();
        }
        catch(e) {
            console.log(e);
        }
    }
};

export default new customerController();