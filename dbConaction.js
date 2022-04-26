const express = require("express")
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'nodejs'
});

// db.connect();


db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});


app.get("/:id", (req, res) => {
    const id = req.params.id
    console.log("from /");


    db.query(`SELECT * FROM users WHERE ID=${id} `, function (error, results, fields) {
        if (error) throw error;
        console.log('The user is: ', results[0]);
        res.send(results)
    });


})

//////////////////////////////get data from brosser/////////////////////////////

app.post("/singup", (req, res) => {


    const { name, email, password } = req.body

    console.log("/singup");
    console.log(email, password);


    var user = { "name": name, "email": email, "password": password }

    db.query(`INSERT INTO  users SET ?`, user, function (error, results, fields) {
        res.send("Submit data")
    })


    // db.query(`INSERT INTO users (name, email,password) VALUES ('${name}', '${email}','${password}')`, function (error, results, fields) {
    //     if (error) console.log(error);
    //     // throw error;
    //     res.send("Submit data")
    // })

})

//////////////////////////////get data from chrome/////////////////////////////

app.post("/singin", (req, res) => {


    const { email, password } = req.body

    console.log("/singin");
    // console.log(email, password);
    // console.log(req.body.password);

    // res.json({ email: req.body.email })

    db.query(`SELECT * FROM users WHERE email='${email}'&& password='${password}'`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results[0])



    })




})

app.listen(3000, console.log("server is run 3000 port"))
