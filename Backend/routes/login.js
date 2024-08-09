import express from 'express';
import db from '../config/dbConnection.js';

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login.ejs'); // Render login form for the login
});

router.post('/login', async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query('SELECT * FROM customer WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      if (password === storedPassword) {
        // render information to be shown when user login
      } else {
        // incorrect password
        res.send('Incorrect Password');
      }
    } else {
        // user not found
        res.send('User not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
