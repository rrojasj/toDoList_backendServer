'use strict';
const mongoose = require('mongoose');

const schema_tarea = new mongoose.Schema({

    fechaTarea: { type: Date, required: true, unique: true },
    nombreTarea: { type: String, required: true, unique: false },
    usuarioEncargado: { type: String, required: true, unique: false },
    prioridad: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
})

/* *************************************__*__************************************* */

// Usuarios: Nombre que se le da al modelo dentro de node - Sirve para referenciar a otros archivos

//usuarios: nombre de la colección en MongoDB Atlas

module.exports = mongoose.model('Tarea', schema_tarea, 'tareas');