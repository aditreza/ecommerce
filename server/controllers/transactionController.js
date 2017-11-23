const ObjectId = require('mongodb').ObjectId
const Transactions = require('../models/transactionModel')

const createTransaction = function(req,res){
  let history = JSON.stringify(req.body.params.logHistory)
  let newTransaction = Transactions({
    product : req.body.params.productId,
    total : req.body.params.total,
    logHistory : history
  })
  newTransaction.save().then(function(data){
    res.status(201).send({data: data, msg:'[+] 1 Transaction Created'})
  }).catch(function(err){
    console.log(err)
    res.status(500).send(err)
  })
}

const findAllTransaction = function(req,res){
  Transactions.find().populate('product').then(function(data_Transactions){
    res.status(200).send(data_Transactions)
  }).catch(function(err){
    console.error(err)
    res.status(500).send(err)
  })
}

const updateTransactions = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transactions.findById(id).then(function(data_Transactions){
    data_Transactions.product = req.body.product,
    data_Transactions.total = req.body.total

    //save
    data_Transactions.save().then(function(){
      res.status(201).send('[+] 1 Transaction Updated')
    }).catch(function(err){
      console.error(err)
      res.status(500).send(err)
    })
  }).catch(function(err){
    console.error(err)
    res.status(500).send(err)
  })
}

const destroyTransaction = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Transactions.findByIdAndRemove(id).then(function(){
    res.status(201).send('[+] 1 Transaction Deleted')
  }).catch(function(err){
    console.error(err)
    res.status(500).send(err)
  })
}
module.exports = {
  createTransaction,
  findAllTransaction,
  destroyTransaction
}