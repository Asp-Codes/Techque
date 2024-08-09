import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

const db = new pg.Client({
  user: process.env.dbUser,
  host: process.env.dbHost,
  database: process.env.db,
  password: process.env.dbPassword,
  port: process.env.dbPort,
});

db.connect();



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});