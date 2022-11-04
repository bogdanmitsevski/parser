import customerClass from '../parser/parserCustomers';
import { Customer } from '../models/models';
import { Technology } from '../models/models';
import { Price } from '../models/models';
import decodeToken from '../decodeToken/decodeToken';
class customerController {
    async getCustomer(ctx: any, next: any) {
        try {
            const id = ctx.request.body.id;

            const findCustomerById: any = await Customer.findOne({
                where: { id: id }
            });

            const findTechnologyById: any = await Technology.findOne({
                where: { id: id }
            });

            const findPriceById: any = await Price.findOne({
                where: { id: id }
            });


            if (!findCustomerById || !findTechnologyById || !findPriceById) {
                ctx.body = 'Please, CHECK if ID is correct';
            }

            else {

                const currentCustomer = findCustomerById.name;
                const currentTechnology = findTechnologyById.name;
                const currentPrice = findPriceById.numeric;

                ctx.body = `Customer: ${currentCustomer} got project with Technology: ${currentTechnology} by Price: $${currentPrice}`;
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    async addCustomers(ctx: any, next: any) {
        try {
            let newCustomer: any;
            let addedDAta: any = [];
            let checkData: any;
            let elem: any;
            let customerArray = await customerClass.parseCustomersFunc();
            const token = ctx.headers.authorization.split(' ')[1];
            let decoded: any = decodeToken(token);
            const id = decoded.id;
            for (elem of customerArray) {
                checkData = await Customer.findOne({
                    where: { name: elem }
                });
                if (checkData) {
                    addedDAta.push(elem);
                    ctx.body = `This Customers were already added - ${addedDAta}`;
                }

                else {
                    newCustomer = await Customer.create({
                        name: elem,
                        addedBy: id
                    })
                    await newCustomer.save();
                    ctx.body = 'Customers were added';
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};

export default new customerController();