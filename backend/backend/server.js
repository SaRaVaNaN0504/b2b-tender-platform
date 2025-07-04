const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const pool = require('./db');
const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/company');
const tenderRoutes = require('./routes/tender');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('🚀 Server is working!'));

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error('DB test failed:', err.message);
    res.status(500).json({ error: 'Database test failed' });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/tender', tenderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
