const express = require('express');
const router = express.Router();
const pool = require('../db');

// ✅ Ping Test
router.get('/ping', (req, res) => {
  res.json({ message: 'Pong! Test route is working!' });
});

// ✅ Database Test
router.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ now: result.rows[0].now });
  } catch (err) {
    console.error('❌ DB Test Failed:', err.message);
    res.status(500).json({ error: 'Database test failed' });
  }
});

module.exports = router;
