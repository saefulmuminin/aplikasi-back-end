const express = require('express');
const app = express();
const port = 3000;

const pool = require('./queries'); // Gantilah dengan path yang sesuai ke queries.js

// Impor rute-rute
const filmRouter = require('./route/films.js'); // Sesuaikan dengan path yang sesuai
const filmByIdRouter = require('./route/filmById.js'); // Sesuaikan dengan path yang sesuai
const categoriesRouter = require('./route/categories.js'); // Sesuaikan dengan path yang sesuai





// Gunakan rute filmById
app.use('/filmById', filmByIdRouter);
app.use('/films', filmRouter);
app.use('/categories', categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
