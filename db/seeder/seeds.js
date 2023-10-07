// seeds.js

const pool = require('../../queries');

// Data untuk seeding (contoh)
const seedData = [
  { first_name: 'Saeful', last_name: "Mu'minin" },
  { first_name: 'Iful', last_name: 'samal' },
  { first_name: 'Ful', last_name: 'loh' },
  { first_name: 'Mukmin', last_name: 'uzul' },
  { first_name: 'Jamal', last_name: 'murtado' },
];

async function seedDatabase() {
  try {
    // Lakukan operasi INSERT untuk setiap data
    for (const data of seedData) {
      const { first_name, last_name } = data;
      const query = 'INSERT INTO actor (first_name, last_name) VALUES ($1, $2)';
      await pool.query(query, [first_name, last_name]);
    }

    console.log('Seeding berhasil.');
  } catch (error) {
    console.error('Seeding gagal:', error);
  } finally {
    // Tutup koneksi pool jika diperlukan
    pool.end();
  }
}

seedDatabase();
