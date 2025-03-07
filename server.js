const express = require("express");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "javascript"))); // Servindo arquivos do front-end
app.use("/html", express.static(path.join(__dirname, "/html")));
app.use("/data", express.static(path.join(__dirname, "data"))); // Servindo arquivos JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "selection.html"));
});
