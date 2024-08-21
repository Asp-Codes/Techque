import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import register from './routes/register.js'; // Import the auth routes module
import login from './routes/login.js';


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.use('/', register); // register route for both get and post methods

app.use('/', login); // login route for both get and post methods




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});