const ElecItem = require('../models/elecItem')

const index = (request, response) => {
    ElecItem.find()
        .then(documents => response.send(documents))
}

const store = (request, response) => {
    console.log(request.body);
    console.log(request.body.serialNo);
    const item = new ElecItem({
        serialNo : request.body.serialNo,
        dcData : request.body.dcData,
        aData : request.body.aData,
        wData : request.body.wData,
        volData : request.body.volData,
        recordTime : request.body.recordTime,
        remarks : request.body.remarks
    })
    item.save()
        .then(document => response.send(document))
    
}

const show = (request, response) => {
    const id = request.params.id
    ElecItem.find({serialNo: id})
       .then(document => response.send(document))
}

const update = (request, response) => {
    const id = request.params.id
    const body = {
        dcData: request.body.dcData,
        aData: request.body.aData,
        wData: request.body.wData,
        volData: request.body.volData,
        recordTime: request.body.recordTime

    }
    ElecItem.findByIdAndUpdate(id, { $set: body}, { new: true})
        .then(document => response.send(document))
}

const destroy = (request, response) => {
    const id = request.params.id
    const body = {
        remarks: request.body.remarks
    }
    ElecItem.findByIdAndRemove(id)
        .then(document => response.send(document))
}
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
