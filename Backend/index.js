import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "pushan",
  port: 5432,
});
db.connect();






app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});