const mongoose = require('mongoose');
//const configuration = require('./configuration')
const database = mongoose.connection
const user = process.env.USER_ATLAS
const password = process.env.PASSWORD_ATLAS
const URI = `mongodb+srv://${user}:${password}@cluster0.70rm0ci.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true)

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.catch(err => console(err))

database.once('open', _ => {
    console.log('connection ok')
});
database.on('error', err => {
    console.log(err)
});

module.exports = database