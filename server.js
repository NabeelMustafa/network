const express = require('express');
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

//get lets connected

connectDB();
app.get('/', (req, res) => res.send('Api running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
