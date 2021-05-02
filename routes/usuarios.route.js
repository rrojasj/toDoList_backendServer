'use strict';
const express = require('express');
const { now } = require('mongoose');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/registrar-usuario', (req, res) => {

    console.log(Date(now), "Se registró un nuevo usuario", req.body.nombre, req.body.correo);

    let nuevoUsuario = new Usuario({
        //esquema       - req.body.... se refiere
        correo: req.body.correo,
        nombre: req.body.nombre,
        primerApellido: req.body.primApellido,
        segundoApellido: req.body.segApellido,
        departamento: req.body.departamento,
    });

    nuevoUsuario.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se registró adecuadamente'
            });
        }
    });
});

module.exports = router;