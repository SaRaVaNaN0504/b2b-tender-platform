// Import required packages
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware: CORS setup
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Middleware: JSON parser
app.use(express.json());

// PostgreSQL Pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // For Supabase or other SSL-enforced hosts
});

// Connect to the PostgreSQL database
pool.connect()
  .then(() => console.log('✅ PostgreSQL connected successfully'))
  .catch(err => console.error('❌ Connection failed:', err.message));

// Example route to test API
app.get('/', (req, res) => {
  res.send('🚀 Backend is up and running');
});

// Export the pool for other modules
module.exports = { app, pool };

// Optional: Start the server (if this is your entry file)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
