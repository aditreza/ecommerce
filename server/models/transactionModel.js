const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  product : {
    type : Schema.ObjectId,
    ref  : 'Item'
  },
  created_at : {
    type : Date,
    default : new Date
  },
  total : Number
})

const transactionModel = mongoose.model('Transaction', transactionSchema)
module.exports = transactionModel