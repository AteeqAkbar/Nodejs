const express = require("express")

const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');
const { TIMESTAMP } = require("mysql/lib/protocol/constants/types");

const app = express()

app.use(express.json())     ///requset snd string it convert all req to json


//   app.use(foo)           //for globly use acess

app.use(cors())            //to allow all public api

/////////////////////////// 	ORM     ///////////////////////////////////https://sequelize.org/docs/v6/core-concepts/model-basics/

const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false,

    }
},

);

const User = sequelize.define('users',
    {
        name: { type: DataTypes.STRING }
        ,

        email: { type: DataTypes.STRING }
    })




app.get("/", async (req, res) => {

    console.log("in root /");
    const getUsers = await User.findAll()
    console.log(getUsers[0].dataValues.email);

})

app.post("/signup", async (req, res) => {

    console.log("in  /signup", req.body);
    const getUsers = await User.create({ name: "Jane", email: "Doe" });
    console.log(getUsers);

})
app.post("/signin", async (req, res) => {

    console.log("in  /signin", req.body);
    const getUsers = await User.findOne({ where: { email: `${req.body.email}` } });
    console.log(getUsers);


})



app.listen(3000, console.log("server is run 3000 port"))


