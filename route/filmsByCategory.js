const express = require('express');
const router = express.Router();
const pool = require('../queries'); // Pastikan path yang sesuai ke queries.js

// Rute untuk menampilkan data film berdasarkan kategori
router.get('/:category', async (req, res) => {
const { category } = req.params;
try {
const query = `
SELECT film.*
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = $1
`;

const { rows } = await pool.query(query, [category]);
res.json(rows);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
});

module.exports = router;
