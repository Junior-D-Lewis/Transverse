const con = require("../db_config/db");
const bcrypt = require("bcrypt");


async function addUsers  (req, res) {
    console.log(req.body)
    const {prenom, nom, email, password} = req.body;
    const hashed_password = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO usersTest (prenom_user, nom_user, email, password_u) VALUES (?, ?, ?, ?)"
    const values = [prenom, nom, email, hashed_password];
    try {
        con.query({sql ,values}, (err, result) => {
            if (err) {
                console.log(err);
                res.send(" "+err.sqlMessage);
            } else {
                console.log(result);
                res.send("user added");
            }
        });
        
    } catch (error) {
        res.json(error); 
    }
}

module.exports = addUsers