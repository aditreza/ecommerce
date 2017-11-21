const express = require('express')
const router = express.Router()
const Items = require('../controllers/itemController')

router.post('/', Items.createItem)
router.get('/', Items.findAllItems)
router.put('/:id', Items.updateItem)
router.delete('/:id', Items.destroyItem)


module.exports = router