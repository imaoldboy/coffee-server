const express = require('express')
const router = express.Router()
const MachineController = require('../controllers/MachineController')

router.route('/machines')
    .get(MachineController.index)
    .post(MachineController.store)

router.route('/machines/:id')
    .get(MachineController.show)
    .patch(MachineController.update)
    .delete(MachineController.destroy)

module.exports = router
