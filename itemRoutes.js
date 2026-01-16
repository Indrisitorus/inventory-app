const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Alamat URL Dashboard
router.get('/dashboard', itemController.getDashboard);

// PENTING: Baris ini yang bikin error tadi jika hilang!
module.exports = router;