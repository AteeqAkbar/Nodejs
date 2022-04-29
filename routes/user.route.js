const express = require('express')
const { send } = require('express/lib/response')
const router = express.Router()
const User = require('../models/index.js')
// const User = db.user

router.
    route('/users').
    get(async (req, res) => {
        console.log("All users");
        const getUsers = await User.findAll()
        console.log(getUsers);
        res.send(getUsers)
    })

router.
    route('/signin').
    get((req, res) => {
        console.log("/sigin get");
    }).post((req, res) => {
        console.log("/sigin post");
    })

module.exports = router;