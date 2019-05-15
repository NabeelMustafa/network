const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const conncetDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log("Connected...");
    } catch (err) {
        console.log("ERROR" + err.message);
        process.exit(1);
    }
}

module.exports = conncetDB;