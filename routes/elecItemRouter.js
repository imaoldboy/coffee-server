const express = require('express')
const router = express.Router()
const ElecItemController = require('../controllers/ElecItemController')

router.route('/elecItems')
    .get(ElecItemController.index)
    .post(ElecItemController.store)

router.route('/elecItems/:id')
    .get(ElecItemController.show)
    .patch(ElecItemController.update)
    .delete(ElecItemController.destroy)

module.exports = router
