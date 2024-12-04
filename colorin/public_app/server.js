const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Ruta para guardar datos
app.post("/save", (req, res) => {
  fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
    if (err) return res.status(500).send("Error al guardar datos");
    res.sendStatus(200);
  });
});

// Ruta para cargar datos
app.get("/load", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) return res.status(500).send("Error al cargar datos");
    res.json(JSON.parse(data));
  });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
