const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('nodejs', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false,

    }
},
);
const db = {}
db.User = require('./user.model')(sequelize, DataTypes)
const User = require('./user.model')(sequelize, DataTypes)
db.sequelize = sequelize;
db.Sequelize = Sequelize
module.exports = User