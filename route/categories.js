const express = require('express');
const router = express.Router();
const pool = require('../queries');

router.get('/', async (req, res) => {
  try {
    const query = 'SELECT special_features FROM film';
    const { rows } = await pool.query(query);

    // Membuat array untuk menyimpan hasil pemrosesan data
    const processedData = [];

    // Loop melalui data dan pemrosesan
    rows.forEach((row) => {
      const specialFeatures = row.special_features;
      if (specialFeatures) {
        // Memisahkan data dengan tanda koma
        const featuresArray = specialFeatures.split(',');

        // Menghilangkan spasi di awal dan akhir setiap elemen
        const trimmedFeatures = featuresArray.map((feature) => feature.trim());

        // Menambahkan hasil pemrosesan ke array
        processedData.push(trimmedFeatures);
      }
    });

    res.json(processedData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
