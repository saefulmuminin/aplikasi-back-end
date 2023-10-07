const express = require('express');
const router = express.Router();
const pool = require('../queries'); // Gantilah dengan path yang sesuai ke queries.js

// Rute untuk menampilkan data film berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const filmId = req.params.id; // Mengambil ID dari parameter URL
    const query = 'SELECT * FROM film WHERE film_id = $1';
    const { rows } = await pool.query(query, [filmId]);
    
    if (rows.length === 0) {
      res.status(404).json({ error: 'Film not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
