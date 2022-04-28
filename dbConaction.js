const express = require("express")
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

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


// app.get("/:id", (req, res) => {
//     const id = req.params.id
//     console.log("from /");


//     db.query(`SELECT * FROM users WHERE ID=${id} `, function (error, results, fields) {
//         if (error) throw error;
//         console.log('The user is: ', results[0]);
//         res.send(results)
//     });


// })

//////////////////////////////get data from brosser/////////////////////////////

app.post("/singup", async (req, res) => {


    const { name, email, password } = req.body

    console.log("/singup");
    console.log(email, password, name);

    const crypt = await bcrypt.hash(password, 13);  ////for encryption of password
    console.log(crypt);
    const pass = await bcrypt.compare(password, crypt);
    console.log(pass);

    var user = { "name": name, "email": email, "password": crypt }

    db.query(`INSERT INTO  users SET ?`, user, function (error, results, fields) {
        if (error) throw error;
        else {
            console.log(results);
            // res.send(results[0]);
            res.status(200).json({
                name: user.name,
                email: user.email,
                massage: "welecome to Our site"
            });
        }
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
    // console.log(email, password);
    // console.log(req.body.password);

    // res.json({ email: req.body.email })
    db.query(`SELECT * FROM users WHERE email='${email}'`, async function (error, results, fields) {
        if (error) throw error;

        console.log(results[0]);

        const pass = await bcrypt.compare(password, results[0].password);

        console.log(pass);
        if (pass) {
            res.send({ login: pass, data: results[0] })
        } else res.send({
            login: pass,
            massage: "please enter correct email and password  "
        })

    })
})


app.get("/admin", (req, res) => {
    console.log("/admin");

    db.query(`SELECT * FROM users`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results[0])

    })

})

app.listen(3000, console.log("server is run 3000 port"))
