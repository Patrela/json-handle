// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

app.use(express.json());

// Ruta para leer el archivo JSON incluyendo ruta y nombre de archivo
app.get('/read-json-1/:path/:filename', (req, res) => {
  const { path: filePath, filename } = req.params;
  const fullFilePath = path.join(__dirname, filePath, filename);

  fs.readFile(fullFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `No se pudo leer el archivo JSON '${filename}' en '${filePath}'` });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Ruta para escribir en el archivo JSON
app.post('/write-json-1/:path/:filename', (req, res) => {
  const { path: filePath, filename } = req.params;
  const fullFilePath = path.join(__dirname, filePath, filename);
  const newData = req.body;

  fs.writeFile(fullFilePath, JSON.stringify(newData, null, 2), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `No se pudo escribir en el archivo JSON '${filename}' en '${filePath}'` });
    } else {
      res.json({ message: `Archivo JSON '${filename}' en '${filePath}' actualizado correctamente` });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
