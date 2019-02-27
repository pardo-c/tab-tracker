const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// assuming there is a models folder which has index.js ret obj w/ sequlize attribute
const {sequelize} = require('./models')
// ^what 'require' is doing is going to dive in node mod folder and find folder/package and find main file and include it  const var
// define config
const config = require('./config/config')
const app = express()
// build an express server -- basic application
// enable packages
app.use(morgan('combined'))
// body parser for parsing json
app.use(bodyParser.json())
app.use(cors())
// ^cors if you want server hosted on different domain
// *make sure you have security covering application

//routes.js returns a function where we can pass an app and different end points
require('./routes')(app)

// connect sequelize to database you have configured
sequelize.sync()
    // create tables if they don't exist
    .then(()=> {

    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
    })
