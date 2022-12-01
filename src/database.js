const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb+srv://AbrahamUABC:AbrahamUABC1771@mern.jymmngx.mongodb.net/LORTDnD?retryWrites=true&w=majority';
mongoose.connect(
    "mongodb+srv://AbrahamUABC:AbrahamUABC1771@mern.jymmngx.mongodb.net/LORTDnD?retryWrites=true&w=majority"
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB esta conectada');
});


