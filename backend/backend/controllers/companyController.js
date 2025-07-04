const pool = require('../db');

// Create company profile
exports.createCompany = async (req, res) => {
  const { name, industry, description } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      'INSERT INTO companies (user_id, name, industry, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, name, industry, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating company:', err.message);
    res.status(500).json({ error: 'Failed to create company profile' });
  }
};

// Get logged-in user's company profile
exports.getMyCompany = async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query('SELECT * FROM companies WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching company:', err.message);
    res.status(500).json({ error: 'Failed to fetch company profile' });
  }
};

// Update company profile
exports.updateCompany = async (req, res) => {
  const { name, industry, description } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      'UPDATE companies SET name = $1, industry = $2, description = $3 WHERE user_id = $4 RETURNING *',
      [name, industry, description, userId]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error updating company:', err.message);
    res.status(500).json({ error: 'Failed to update company profile' });
  }
};

// List all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error listing companies:', err.message);
    res.status(500).json({ error: 'Failed to list companies' });
  }
};
