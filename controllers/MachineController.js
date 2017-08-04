const Machine = require('../models/coffeeMachine')

const index = (request, response) => {
    Machine.find()
        .then(documents => response.send(documents))
}

const store = (request, response) => {
    //console.log(request.body)
    const event = new Machine({
        remarks: request.body.remarks
    })
    event.save()
        .then(document => response.send(document))
    
}

const show = (request, response) => {
    const id = request.params.id
    Machine.findById(id)
        .then(document => response.send(document))
}

const update = (request, response) => {
    const id = request.params.id
    const body = {
        remarks: request.body.remarks
    }
    Machine.findByIdAndUpdate(id, { $set: body}, { new: true})
        .then(document => response.send(document))
}

const destroy = (request, response) => {
    const id = request.params.id
    const body = {
        remarks: request.body.remarks
    }
    Machine.findByIdAndRemove(id)
        .then(document => response.send(document))
}
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
