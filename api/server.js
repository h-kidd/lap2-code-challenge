const mongoose = require('mongoose');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

// connect to DB
mongoose.connect(process.env.DB_CONNECT, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true
    }) 
    .then(() => {
        console.log('DB connected!')
    });


// roots
// import routes
const postRoute = require('./routes/posts');

app.use(express.json());

// route middlewares
app.use('/', authRoute);

// root response
app.get('/', (req,res) => {
    res.send('Copy! Over')
})

// start server
app.listen(3000, () => console.log("Server is running"));
