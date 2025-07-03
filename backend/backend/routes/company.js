const express = require('express');
const router = express.Router();
const { createCompany, getMyCompany } = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Protect both routes with middleware
router.post('/', authMiddleware, createCompany);
router.get('/me', authMiddleware, getMyCompany);

module.exports = router;
