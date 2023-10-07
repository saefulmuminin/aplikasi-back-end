const express = require('express');
const router = express.Router();
const pool = require('../queries'); // Pastikan path yang sesuai ke queries.js

// Rute untuk menampilkan semua data kategori
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM category'; // Ganti "category" sesuai dengan nama tabel yang sebenarnya
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
