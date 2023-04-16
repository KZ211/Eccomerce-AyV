import express from 'express';
import cors from 'cors';
import { urlencoded, json } from 'body-parser';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.get('/api/mensaje', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

// Servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
