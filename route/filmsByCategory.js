const express = require('express');
const router = express.Router();
const pool = require('../queries'); // Gantilah dengan path yang sesuai ke queries.js

// Rute untuk menampilkan data film berdasarkan category
router.get('/byCategory/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const query = `
      SELECT film.* FROM film
      JOIN film_category ON film.film_id = film_category.film_id
      WHERE film_category.category_id = $1
    `;
    const { rows } = await pool.query(query, [categoryId]);
    res.json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
