// dbConnection.mjs
import pg from 'pg';

const db = new pg.Client({
  user: process.env.dbUser,
  host: process.env.dbHost,
  database: process.env.db,
  password: process.env.dbPassword,
  port: process.env.dbPort,
});

db.connect().catch(err => {
  console.error('Database connection error:', err.stack);
});

export default db;
