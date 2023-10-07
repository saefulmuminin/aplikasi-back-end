const express = require('express');
const router = express.Router();
const pool = require('../queries'); // Gantilah dengan path yang sesuai ke queries.js

// Rute untuk menampilkan semua data film
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM film';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
