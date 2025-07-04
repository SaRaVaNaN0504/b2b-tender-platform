const express = require('express');
const router = express.Router();
const pool = require('../db');
const authMiddleware = require('../middleware/authMiddleware');

// Get company profile (protected)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await pool.query('SELECT * FROM companies WHERE user_id = $1', [userId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Company profile error:', err.message);
    res.status(500).json({ error: 'Failed to fetch company profile' });
  }
});

// Create company profile (protected)
router.post('/create', authMiddleware, async (req, res) => {
  const { name, industry, description } = req.body;
  const userId = req.user.id;

  try {
    // Validate input
    if (!name || !industry) {
      return res.status(400).json({ error: 'Name and industry are required' });
    }

    // Check if user already has a company
    const existingCompany = await pool.query('SELECT * FROM companies WHERE user_id = $1', [userId]);
    if (existingCompany.rows.length > 0) {
      return res.status(400).json({ error: 'User already has a company profile' });
    }

    const result = await pool.query(
      'INSERT INTO companies (user_id, name, industry, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, name, industry, description]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating company:', err.message);
    res.status(500).json({ error: 'Failed to create company profile' });
  }
});

// Update company profile (protected)
router.put('/update', authMiddleware, async (req, res) => {
  const { name, industry, description } = req.body;
  const userId = req.user.id;

  try {
    // Validate input
    if (!name || !industry) {
      return res.status(400).json({ error: 'Name and industry are required' });
    }

    const result = await pool.query(
      'UPDATE companies SET name = $1, industry = $2, description = $3 WHERE user_id = $4 RETURNING *',
      [name, industry, description, userId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating company:', err.message);
    res.status(500).json({ error: 'Failed to update company profile' });
  }
});

// List all companies (public)
router.get('/list', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error listing companies:', err.message);
    res.status(500).json({ error: 'Failed to list companies' });
  }
});

module.exports = router;