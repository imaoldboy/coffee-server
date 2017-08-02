const db = require('../config/database')

const options = {

}

const schema = new db.Schema({
    description: {
        type: String
    },
    location: {
        type: String
    },
    customerID: {
        type: String
    },
    ipAddress: {
        type: String
    },
    maintainerID: {
        type: String
    },
    updateUrl: {
        type: String
    },
    qrCode: {
        type: String
    },
    remarks: {
        type: String
    },
    cups: {
        type: String
    },
    status: {
        type: String
    },
    serialNo: {
        type: String
    },

}, options)

const CoffeeMachine = db.model('CoffeeMachine', schema)

module.exports = CoffeeMachine
