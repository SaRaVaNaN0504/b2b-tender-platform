const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/company');
const pool = require('./db'); // PostgreSQL connection

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => res.send('🚀 Server is working!'));

// Test PostgreSQL connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error('Database connection failed:', err.message);
    res.status(500).json({ error: 'Database test failed' });
  }
});

// Route groups
app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
