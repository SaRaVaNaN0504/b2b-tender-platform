const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => console.log('✅ PostgreSQL Connected Successfully'))
  .catch((err) => console.error('❌ PostgreSQL Connection Error:', err.message));

module.exports = pool;
