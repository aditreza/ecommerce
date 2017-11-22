const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  product : [{
    type : Schema.Types.ObjectId,
    ref  : 'Item'
  }],
  created_at : {
    type : Date,
    default : new Date
  },
  total : Number,
  logHistory : [{
    type : String
  }]
})

const transactionModel = mongoose.model('Transaction', transactionSchema)
module.exports = transactionModel