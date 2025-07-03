const express = require('express');
const router = express.Router();
const { createTender, getAllTenders, getTenderById } = require('../controllers/tenderController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new tender (only logged-in companies)
router.post('/', authMiddleware, createTender);

// Get all tenders (public)
router.get('/', getAllTenders);

// Get a tender by ID (public)
router.get('/:id', getTenderById);

module.exports = router;
