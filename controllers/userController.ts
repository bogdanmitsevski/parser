import { User } from "../models/models";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const generateJwt = (id: any, email: any) => {
    return jwt.sign(
      {id, email}, 
        process.env.SECRET_KEY as string,
        {expiresIn: '24h'}
        );
    }
class userController {
    async registration(ctx: any, next: any) {
        try {
            const email = ctx.request.body.email;
            const password = ctx.request.body.password;
            const checkUser = await User.findOne({
                where:{email:email}
            });
            if(checkUser) {
                ctx.body = `User with Email: ${email} was already registered`;
            }

            else {
                const hashPassword = bcrypt.hash(password, '8');
                const newUser:any = await User.create({email, password:hashPassword});
                const token = generateJwt(newUser.id, newUser.email);
                await newUser.save();
                ctx.body = `New User was succesfully created with token ${token}`;
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    async login(ctx: any, next: any) {
        try {

        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new userController();