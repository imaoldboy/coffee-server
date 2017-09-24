const express = require('express')
const router = express.Router()
const EventController = require('../controllers/EventController')
const MachineController = require('../controllers/MachineController')
const ElecItemController = require('../controllers/ElecItemController')

router.route('/events')
    .get(EventController.index)
    .post(EventController.store)

router.route('/events/:id')
    .get(EventController.show)
    .patch(EventController.update)
    .delete(EventController.destroy)

router.route('/machines')
    .get(MachineController.index)
    .post(MachineController.store)

router.route('/machines/:id')
    .get(MachineController.show)
    .patch(MachineController.update)
    .delete(MachineController.destroy)

router.route('/elecItems')
    .get(ElecItemController.index)
    .post(ElecItemController.store)

router.route('/elecItems/:id')
    .get(ElecItemController.show)
    .patch(ElecItemController.update)
    .delete(ElecItemController.destroy)


module.exports = router
