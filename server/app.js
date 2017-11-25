const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://bukabukaan:bukabukaan12#@clusterbukabukaan-shard-00-00-oefpr.mongodb.net:27017,clusterbukabukaan-shard-00-01-oefpr.mongodb.net:27017,clusterbukabukaan-shard-00-02-oefpr.mongodb.net:27017/ecommerceDb?ssl=true&replicaSet=ClusterBukabukaan-shard-0&authSource=admin').then(function(){
  console.log('[+] database is listen')
}).catch(function(err){
  if(err){
    console.error(err)
  }
})

//routes
const index = require('./routes/index')
const items = require('./routes/items')
const transactions = require('./routes/transaction')
app.use('/', index)
app.use('/api/items', items)
app.use('/api/transactions', transactions)

app.listen(PORT, function(err){
  if(!err){
    console.log(`[+] server listen on PORT ${PORT}`)
  }
})