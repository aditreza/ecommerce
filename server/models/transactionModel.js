const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  product : {
    type : Schema.ObjectId,
    ref  : 'Book'
  },
  created_at : {
    type : date,
    default : new Date
  },
  total : Number
})

const transactionModel = mongoose.model('Transaction', transactionSchema)
module.exports = transactionModel