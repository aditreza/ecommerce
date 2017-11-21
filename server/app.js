const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ecommerceDb').then(function(){
  console.log('[+] database is listen')
}).catch(function(err){
  if(err){
    console.error(err)
  }
})

//routes
const index = require('./routes/index')
app.use('/', index)

app.listen(PORT, function(err){
  if(!err){
    console.log(`[+] server listen on PORT ${PORT}`)
  }
})