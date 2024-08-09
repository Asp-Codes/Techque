import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "pushan",
  port: 5432,
});

db.connect().catch(err => {
  console.error('Database connection error:', err.stack);
});

export default db;
