const pool = require('../db');

// Helper to find the company of logged-in user
async function getCompanyId(userId) {
  const result = await pool.query('SELECT id FROM companies WHERE user_id = $1', [userId]);
  if (result.rows.length === 0) return null;
  return result.rows[0].id;
}

exports.createTender = async (req, res) => {
  const { title, description, budget, deadline } = req.body;
  const userId = req.userId;

  try {
    const companyId = await getCompanyId(userId);
    if (!companyId) return res.status(403).json({ error: 'Company profile not found' });

    const result = await pool.query(
      `INSERT INTO tenders (company_id, title, description, budget, deadline) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [companyId, title, description, budget, deadline]
    );

    res.status(201).json({ tender: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error creating tender' });
  }
};

exports.getAllTenders = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT t.*, c.name as company_name
      FROM tenders t
      JOIN companies c ON c.id = t.company_id
      ORDER BY t.created_at DESC
    `);

    res.json({ tenders: result.rows });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tenders' });
  }
};

exports.getTenderById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT t.*, c.name as company_name 
       FROM tenders t 
       JOIN companies c ON c.id = t.company_id 
       WHERE t.id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tender not found' });
    }

    res.json({ tender: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tender' });
  }
};
