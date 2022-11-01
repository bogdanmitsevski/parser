import { Technology } from "./models/models";

async function checkTechnology(value:any) {
    const newTechnology:any = await Technology.findOne({
        where:{name:value}
    });

    if(newTechnology) {
        return console.log('Data was already created')
    }
    else {
        return true;
    }
};

export default checkTechnology;
