const express = require('express')
const router = express.Router()
const Transactions = require('../controllers/transactionController')

router.get('/', Transactions.findAllTransaction)
router.post('/', Transactions.createTransaction)
router.delete('/:id', Transactions.destroyTransaction)

module.exports = router