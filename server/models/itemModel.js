const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  isbn : String,
  title : String,
  author : String,
  category : String,
  stock : String,
  price : Number
})

const itemModels = mongoose.model('Item', itemSchema)
module.exports = itemModels