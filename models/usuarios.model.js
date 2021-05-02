'use strict';
const mongoose = require('mongoose');

const schema_usuario = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    primerApellido: { type: String, required: true, unique: false },
    segundoApellido: { type: String, required: true, unique: false },
    departamento: { type: String, required: false, unique: false },
})

/* *************************************__*__************************************* */

// Usuarios: Nombre que se le da al modelo dentro de node - Sirve para referenciar a otros archivos

//usuarios: nombre de la colección en MongoDB Atlas

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');