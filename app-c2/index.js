const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/get-info', async (req, res) => {
  try {
    // Realiza una petición al servidor anterior a través del reverse proxy
    const response = await axios.get('http://app1/api/string-settings');
    const { numCharacters, allowedCharacters } = response.data;

    // Genera una cadena aleatoria
    const randomString = generateRandomString(numCharacters, allowedCharacters);

    // Obtiene la hora y la fecha
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // Envía la respuesta al cliente
    res.json({
      numCharacters,
      allowedCharacters,
      randomString,
      formattedDate,
    });
  } catch (error) {
    res.status(500).send('Error al obtener la información de app1');
  }
});

function generateRandomString(length, characters) {
  let result = '';
  const charactersArray = characters.split('');
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersArray.length);
    result += charactersArray[randomIndex];
  }
  return result;
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

