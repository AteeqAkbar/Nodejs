const express = require("express")

const cors = require('cors')

const app = express()

app.use(express.json())    ///requset snd string it convert all req to json


//   app.use(foo)           //for globly use acess

app.use(cors())            //to allow public api

app.get("/", foo, (req, res) => {

    console.log("from /");
    // res.status(201).send("created")
    // console.log(req.body.user);

    // res.send(req.body.user)

    // res.send("Hello Get")

    res.json({ id: 2 })

    // console.log(req.query);            //http://localhost:3000/?page=2


})


app.get("/products", (req, res) => {    //http://localhost:3000/products/2


    console.log("products");
    res.send("products")
})




app.get("/products/:id", (req, res) => {    //http://localhost:3000/products/2

    // console.log(req.params.id);
    // res.send(req.params.id)




})






app.post("/", (req, res) => {

    res.send("Hello Post")



})
app.listen(3000, console.log("server is run 3000 port"))

function foo(req, res, next) {

    console.log("foo");
    // res.send("foo")        //return requset
    next()
}