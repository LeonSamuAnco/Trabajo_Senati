const express = require('express');
const router = express.Router();

// Ruta GET para obtener todos los productos
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de productos' });
});

// Otra ruta de ejemplo
router.get('/:id', (req, res) => {
  res.json({ mensaje: `Producto con ID ${req.params.id}` });
});

module.exports = router;
