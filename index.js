require("dotenv/config")
const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const database = require('./connection')
//const authRoutes = require('./routes/auth');
const indexRoute = require('./routes/index')


//init server
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());
app.use('/api', indexRoute);

app.listen(process.env.PORT, () => console.log('Server run on port', process.env.PORT ))

