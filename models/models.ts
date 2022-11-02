import Sequelize  from "../db";

import { DataTypes } from "sequelize";

const Technology = Sequelize.define('technologies',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull: false},
    name: {type:DataTypes.STRING, allowNull:false, unique: true},
    addedBy: {type:DataTypes.INTEGER, allowNull:false}
});

const User = Sequelize.define('users',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull: false},
    email: {type:DataTypes.STRING, allowNull:false, unique:true},
    password: {type:DataTypes.STRING, allowNull:false}
});

const Customer = Sequelize.define('customers',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull: false},
    name: {type:DataTypes.STRING, allowNull:false},
    addedBy: {type:DataTypes.INTEGER, allowNull:false}
});

const Price = Sequelize.define('pricies',{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true, allowNull: false},
    numeric: {type:DataTypes.INTEGER, allowNull:false},
    addedBy: {type:DataTypes.INTEGER, allowNull:false}
});

User.hasMany(Customer);
Customer.belongsTo(User);

User.hasMany(Technology);
Technology.belongsTo(User);

Customer.hasMany(Technology);
Technology.belongsTo(Customer);

Technology.hasOne(Price);
Price.belongsTo(Technology);


export {
    Technology,
    User,
    Customer,
    Price
}
