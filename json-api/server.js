// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); 
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

app.use(express.json());
app.use(cors()); 

/**
 * For reading the filename json contents
 * @param {String} fileName Need to include .json as extension. the default path is the API path
 * @return Bodty response wiht the json contents
 * @uses http://localhost:3001/read-json/file-name.json
 * @example http://localhost:3001/read-json/data.json data.json is the default json file for testing the app. It works at port 3001
 */
app.get('/read-json/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `No se pudo leer el archivo JSON '${filename}'` });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

/**
 * For create / update the filename json contents
 * @param {String} fileName Need to include .json as extension. the default path is the API path
 * @return Bodty response wiht the json contents
 * @uses http://localhost:3001/write-json/file-name.json
 * @example http://localhost:3001/write-json/data.json its the default json file for testing the app. It works at port 3001
 */
app.post('/write-json/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, filename);
  const newData = req.body;
  console.log(filePath.toString());
  fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `No se pudo escribir en el archivo JSON '${filename}'` });
    } else {
      res.json({ message: `Archivo JSON '${filename}' actualizado correctamente` });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});