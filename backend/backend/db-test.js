const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => {
    console.log("✅ Connected to the database");
    return client.query('SELECT NOW()');
  })
  .then(res => {
    console.log("Time from DB:", res.rows[0]);
  })
  .catch(err => {
    console.error("❌ DB Connection Error:", err.message);
  })
  .finally(() => {
    client.end();
  });