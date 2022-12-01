const {Schema, model} = require("mongoose");
const charSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    clase:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    raza:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    //atributos 
    aguante:{type: Number, required: false},
    
    fuerza:{type: Number, required: false},
    destreza:{type: Number, required: false},
    constitucion:{type: Number, required: false},
    inteligencia:{type: Number, required: false},
    sabiduria:{type: Number, required: false},
    carisma:{type: Number, required: false},

    //Estadisitcas
    movimiento:{type: Number, required: false},
    puntosvida:{type: Number, required: false},
    defensa: {type: Number, required: false},
    ataque: {type: Number, required: false},
    instintos: {type: Number, required: false},
    poder:{type: Number, required: false},

    //La frase:
    frase:{type: String, required: false, trim: true, unique: false}

     //habilidades
    /*alerta:{Number},
    comunicacion:{Number},
    manipulacion:{Number},
    erudicion:{Number},
    subterfugio:{Number},
    supervivenica:{Number},
    */
},{
    timestamps: true
});
module.exports = model("Char", charSchema);