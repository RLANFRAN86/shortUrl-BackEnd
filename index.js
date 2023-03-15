require("dotenv/config")
const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const database = require('./connection')

//init server
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());
app.use('/api', require('./routes/index'));

app.listen(process.env.PORT, () => console.log('Server run on port', process.env.PORT ))

