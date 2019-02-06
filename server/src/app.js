const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// what 'require' is doing is going to dive in node mod folder and find folder/package and find main file and include it  const var
const app = express()
// build an express server -- basic application
//enable packages
// body parser for parsing json
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// cors if you want server hosted on different domain
// make sure you have security covering application

//status end point
app.get('/status', (req, res) => {
 res.send({
     message: 'hello world'
 })
})

app.listen(process.env.PORT || 8081)
