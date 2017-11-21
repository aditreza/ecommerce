const ObjectId = require('mongodb').ObjectId
const Items = require('../models/itemModel')

const createItem = function(req,res){
  let newItem = Items({
    item_code : req.body.item_code,
    item_name : req.body.item_name,
    brand : req.body.brand,
    category : req.body.category,
    stock : req.body.stock,
    price : req.body.price,
    img : req.body.img,
    desciption : req.body.desciption
  })
  newItem.save().then(function(){
    res.status(201).send('[+] 1 Item Created')
  }).catch(function(err){
    console.error(err)
    res.status(500).send(err)
  })
}

const findAllItems = function(req,res){
  Items.find().then(function(data_Items){
    res.status(200).send(data_Items)
  }).catch(function(err){
    console.error(err)
    res.status(500).send(err)
  })
}

const updateItem = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Items.findById(id).then(function(data_Items){
    data_Items.item_code = req.body.item_code,
    data_Items.item_name = req.body.item_name,
    data_Items.brand = req.body.brand,
    data_Items.category = req.body.category,
    data_Items.stock = req.body.stock,
    data_Items.price = req.body.price,
    data_Items.img = req.body.img,
    data_Items.desciption = req.body.desciption
    // save
    data_Items.save().then(function(){
      res.status(201).send('[+] 1 Item Updated')
    }).catch(function(err){
      res.status(500).send(err)
    })
  }).catch(function(err){
    res.status(500).send(err)
  })
}

const destroyItem = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Items.findByIdAndRemove(id).then(function(){
    res.status(201).send('[+] 1 Items Deleted')
  }).catch(function(err){
    res.status(500).send(err)
  })
}

module.exports = {
  createItem,
  findAllItems,
  updateItem,
  destroyItem

}