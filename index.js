require("dotenv/config")
const express = require('express');
const cors = require('cors');
const database = require('./connection')
const indexRoute = require('./routes/index')


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use(cors());
app.use('/api', indexRoute);


app.listen(process.env.PORT, () => console.log('Server run on port', process.env.PORT ))

