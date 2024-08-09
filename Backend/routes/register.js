import express from 'express';
import db from '../config/dbConnection.js';

const router = express.Router();


router.get("/register", (req, res) => {
    res.render("register.ejs"); // render registeration form
});


  
router.post("/register", async (req, res) => {
    const email = req.body.username;
    const password = req.body.password;

    try {
        const checkResult = await db.query("SELECT * FROM customer WHERE email = $1", [
        email,
        ]);

        if (checkResult.rows.length > 0) {
            res.send("Email already exists. Try logging in.");
        } else {
            const result = await db.query(
                "INSERT INTO customer (email, password) VALUES ($1, $2)",
                [email, password]
            );
            console.log(result);
            res.send("nothing");
        }
    } catch (err) {
        console.log(err);
    }
});

export default router;