const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.post('/usuarios', UsuarioController.createUsuario);

module.exports = router;