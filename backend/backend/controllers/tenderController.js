const pool = require('../db');

// Create Tender
exports.createTender = async (req, res) => {
  const { title, description, budget, deadline } = req.body;
  const userId = req.user.id;

  try {
    const company = await pool.query('SELECT id FROM companies WHERE user_id = $1', [userId]);
    if (!company.rows.length) return res.status(400).json({ error: 'Company not found' });

    const companyId = company.rows[0].id;

    const result = await pool.query(
      `INSERT INTO tenders (company_id, title, description, budget, deadline)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [companyId, title, description, budget, deadline]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Create tender error:', err.message);
    res.status(500).json({ error: 'Failed to create tender' });
  }
};

// Get All Tenders (Public)
exports.getAllTenders = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT t.*, c.name AS company_name FROM tenders t
       JOIN companies c ON t.company_id = c.id
       ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get tenders error:', err.message);
    res.status(500).json({ error: 'Failed to fetch tenders' });
  }
};

// Get Tenders of Logged-in Company
exports.getMyTenders = async (req, res) => {
  const userId = req.user.id;

  try {
    const company = await pool.query('SELECT id FROM companies WHERE user_id = $1', [userId]);
    if (!company.rows.length) return res.status(400).json({ error: 'Company not found' });

    const companyId = company.rows[0].id;

    const result = await pool.query(
      'SELECT * FROM tenders WHERE company_id = $1 ORDER BY created_at DESC',
      [companyId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('My tenders error:', err.message);
    res.status(500).json({ error: 'Failed to fetch your tenders' });
  }
};

// (Optional) Update Tender
exports.updateTender = async (req, res) => {
  const { id, title, description, budget, deadline } = req.body;
  const userId = req.user.id;

  try {
    const company = await pool.query('SELECT id FROM companies WHERE user_id = $1', [userId]);
    if (!company.rows.length) return res.status(400).json({ error: 'Company not found' });

    const companyId = company.rows[0].id;

    const result = await pool.query(
      `UPDATE tenders
       SET title = $1, description = $2, budget = $3, deadline = $4
       WHERE id = $5 AND company_id = $6
       RETURNING *`,
      [title, description, budget, deadline, id, companyId]
    );

    if (!result.rows.length) return res.status(404).json({ error: 'Tender not found or not yours' });

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Update tender error:', err.message);
    res.status(500).json({ error: 'Failed to update tender' });
  }
};
