import { Price } from '../models/models';
import decodeToken from '../decodeToken/decodeToken';
class priceController {
    async addPrice(ctx: any, next: any) {
        try {
            const price = ctx.request.body.price;

            const checkPrice: any = await Price.findOne({
                where: { numeric: price }
            });

            if (checkPrice) {
                ctx.body = `Note with Price: ${price} was already created`;
            }

            else {
                const token = ctx.headers.authorization.split(' ')[1];
                let decoded: any = decodeToken(token);
                const id = decoded.id;
                const addPrice = await Price.create({
                    numeric: price,
                    addedBy: id
                });

                await addPrice.save();

                ctx.body = `Price : ${price} was successfully added to the table, added by User with ID: ${id}`;


            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new priceController();