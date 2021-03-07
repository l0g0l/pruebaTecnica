const express = require('express');
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const bodyParser = require('body-parser'); // para poder recibir los datos en JSON, para que express pueda entender los JSON
const path = require('path');

const app = express();

// Settings
const port = process.env.PORT || 5000


// Middelwares. Aplicaciones que han desarrollado terceros para simplificar tareas/funciones
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config(); // rutas protegidas
app.use(express.static(path.join(__dirname, '../Client/build'))); // Serve the static files from the React app


// routes

app.use('/api/products', require('./routes/products'))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../Client/build/index.html'));
});


// listen.port
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})



