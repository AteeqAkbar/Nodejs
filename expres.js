const express = require("express")
const app = express()
//   app.use(foo)   //for globly use acess
app.get("/", foo, (req, res) => {

    console.log("from /");
    // res.status(201).send("created")
    // res.send("Hello Get")

    // res.send({ id: 2 })

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