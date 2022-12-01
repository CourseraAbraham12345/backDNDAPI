



const charsCtrl = {};
const Char = require("../models/Char");
charsCtrl.getChars = async(req, res) => {
    const chars = await Char.find();
    res.json(chars);
}

charsCtrl.getChar = async (req, res) => {
    const char = await Char.findById(req.params.id);
    console.log(char);
    res.json(char);
};

charsCtrl.deleteChar = async (req, res) => {
    await Char.findByIdAndDelete(req.params.id);
    res.json({message: 'Char borrado'})
};

charsCtrl.updateChar = async (req, res) => {
    const { nombre, clase, raza, aguante, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma,
        movimiento, puntosvida, defensa, ataque, instintos, poder, frase
        } = req.body;
    await Char.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        clase,
        raza,
        aguante, fuerza, destreza, constitucion, inteligencia, sabiduria,
        carisma, movimiento, puntosvida, defensa, ataque, instintos, poder,
        frase
    });
    console.log(req.params.id, req.body);
    res.json({message: 'char Updated'});
};
charsCtrl.createChar = async (req, res) => {
    const { nombre, clase, raza, aguante, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma,
    movimiento, puntosvida, defensa, ataque, instintos, poder, frase
    } = req.body;
    const newChar = new Char({
        nombre: nombre,
        clase: clase,
        raza: raza,

        aguante: aguante,
        fuerza: fuerza,
        destreza: destreza,
        constitucion: constitucion,
        inteligencia: inteligencia,
        sabiduria: sabiduria,
        carisma: carisma,

        movimiento: movimiento,
        puntosvida: puntosvida,
        defensa: defensa,
        ataque: ataque,
        instintos: instintos,
        poder: poder,

        frase: frase

    });
    console.log(newChar);
    await newChar.save();
    res.json({message: "char created"});
};

module.exports = charsCtrl;