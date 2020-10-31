const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('datas',schema) //data name is coming from our mongoDB collection name. Also this file name data.js