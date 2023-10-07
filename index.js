const express = require('express');
const app = express();
const port = 3000;

const pool = require('./queries'); // Pastikan path yang sesuai ke queries.js

// Impor rute-rute
const filmRouter = require('./route/films.js');
const filmByIdRouter = require('./route/filmById.js');
const categoriesRouter = require('./route/categories.js');
const filmsByCategory = require('./route/filmsByCategory.js'); // Tambahkan rute ini

// Gunakan rute filmById
app.use('/filmById', filmByIdRouter);
app.use('/films', filmRouter);
app.use('/categories', categoriesRouter);
app.use('/filmsByCategory', filmsByCategory); // Gunakan rute filmsByCategory

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
