require('dotenv').config();
import Koa from 'koa';
import sequelize from './db';
import bodyParser from 'koa-bodyparser';
import router from './routes/index';

const app = new Koa();
app.use(bodyParser());
const model = require('./models/models');
const port = process.env.PORT || 4001;

app.use(router.routes());
const start = async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
app.listen(port, ()=>{
    console.log('Server is working');
})
    }
    catch(e) {
        console.log(e);
    }
};

start();