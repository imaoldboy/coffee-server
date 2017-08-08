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
    Machine.find({serialNo: id})
       .then(document => response.send(document))
//    Machine.findById(id)
//       .then(document => response.send(document))
}

const update = (request, response) => {
    const id = request.params.id
    const body = {
        status: request.body.status,
       /* cups: request.body.cups,
        description: request.body.description,
        location: request.body.location, 
        customerID: request.body.customerID,
        ipAddress:  request.body.ipAddress,
        maintainerID:  request.body.maintainerID,
        updateUrl:  request.body.updateUrl,
        qrCode:  request.body.qrCode,
        remarks:  request.body.remarks,
        serialNo:  request.body.serialNo
        */
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
