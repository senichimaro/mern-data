const endpoints = require('./routes/routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )

app.use( '/public', express.static('./storage/images') )

const cors = require('cors')
const options = cors.CorsOptions = {
  origin:['http://localhost:3000']
}
app.use( cors(options) )


app.use( endpoints )





module.exports = app
