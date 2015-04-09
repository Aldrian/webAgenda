'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    annee: Number,
    nom: String,
    prenom: String,
    groupe: String,
    baccalaureat: String,
    email: String,
    numtel: String,
    apresDut: String,
    profession: String
});

module.exports = mongoose.model('Contact', ContactSchema);