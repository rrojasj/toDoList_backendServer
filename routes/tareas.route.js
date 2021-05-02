'use strict';
const express = require('express');
const { now } = require('mongoose');
const router = express.Router();
const Tarea = require('../models/tareas.model');

router.post('/registrar-tarea', (req, res) => {

    console.log(Date(now), "Se registró una nueva tarea", req.body.nombreTarea, req.body.usuarioEncargado);

    let nuevaTarea = new Tarea({
        //esquema       - req.body.... se refiere
        fechaTarea: req.body.fechaTarea,
        nombreTarea: req.body.nombreTarea,
        usuarioEncargado: req.body.usuarioEncargado,
        prioridad: req.body.prioridad,
        descripcion: req.body.descripcion,
    });

    nuevaTarea.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar la tarea',
                error
            });
        } else {
            res.json({
                msj: 'La tarea se registró adecuadamente'
            });
        }
    });
});

module.exports = router;