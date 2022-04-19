const con = require("../db_config/db");

async function addUsers  (req, res) {
    console.log(req.body)
    res.status(200).send('users added')
}

module.exports = addUsers