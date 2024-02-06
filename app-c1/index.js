const express = require('express');
const bodyParser = require('body-parser');
const yaml = require('js-yaml');
const fs = require('fs');

const app = express();
const PORT = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para el formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html');
});

// Ruta para manejar el formulario y guardar en el archivo .yml
app.post('/', (req, res) => {
  const { numCharacters, allowedCharacters } = req.body;

  const data = {
    numCharacters,
    allowedCharacters,
  };

  const yamlString = yaml.dump(data);

  fs.writeFileSync('config.yml', yamlString);

  //res.send('Configuración guardada correctamente');
  // Redirigir al usuario de vuelta al formulario
  res.redirect('/admin');
});

// Ruta para obtener la información almacenada en el archivo .yml
app.get('/api/string-settings', (req, res) => {
  try {
    const fileContents = fs.readFileSync('config.yml', 'utf8');
    const configData = yaml.load(fileContents);
    res.json(configData);
  } catch (err) {
    res.status(500).send('Error al leer el archivo de configuración');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

