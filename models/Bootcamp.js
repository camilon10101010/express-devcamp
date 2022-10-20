const mongoose = require('mongoose') 

//modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Por favor, imgresa nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admiten bootcamps > 30 caracteres"
        ]
    },
    description: {
        type: String,
        requred: [
            true,

            'Por favor ingrese descripcion'
        ],
        maxlength: [
            500,
            "No se admiten descripciones > a 500 caracteres"
        ]
    },
    phone:{
        type:String,
        maxlength: [
            20,
            "No se admiten telefonos > a 20 caracteteres"            
        ]
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor, ingrese imail'
        ],
    },
    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1,"Calificacion minima: 1"],
        max:[10,"Calificacion maxima: 10"]
    }
})

module.export = mongoose.model('bootcamp',BootcampsSchema)