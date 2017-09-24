const db = require('../config/database')

const options = {

}

const schema = new db.Schema({
    serialNo: {
        type: String
    },
    dcData: {
        type: String
    },
    aData: {
        type: String
    },
    wData: {
        type: String
    },
    volData: {
        type: String
    },
    recordTime: {
        type: Date
    },
    remarks: {
        type: String
    }
}, options)

const ElecItem = db.model('ElecItem', schema)

module.exports = ElecItem


/* test code
const Item = require('./elecItem')
const item = new Item({
   remarks: 'remarks', 
   recordTime: new Date()
})
item.save()
    .then(document => console.log(document))
    .catch(error => console.log(error))
*/
