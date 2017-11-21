const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  item_code : {
    type : String,
    required : true,
    unique : true
  },
  item_name : {
    type : String,
    required : true
  },
  brand : {
    type : String,
    required : true
  },
  category : {
    type : String,
    required : true
  },
  stock : {
    type : String,
    required : true
  },
  price : {
    type : String,
    required : true
  }
})

const itemModels = mongoose.model('Item', itemSchema)
module.exports = itemModels