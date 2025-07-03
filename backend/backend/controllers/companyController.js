const pool = require('../db');

exports.createCompany = async (req, res) => {
  const { name, industry, description, logo_url } = req.body;
  const userId = req.userId;

  try {
    const result = await pool.query(
      'INSERT INTO companies (user_id, name, industry, description, logo_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, name, industry, description, logo_url]
    );

    res.status(201).json({ company: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error creating company profile' });
  }
};

exports.getMyCompany = async (req, res) => {
  const userId = req.userId;

  try {
    const result = await pool.query('SELECT * FROM companies WHERE user_id = $1', [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json({ company: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving company' });
  }
};
