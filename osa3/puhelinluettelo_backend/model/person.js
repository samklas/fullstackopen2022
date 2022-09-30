require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const personSchema = mongoose.Schema({
  name: String,
  number: String
})

module.exports = mongoose.model('Person', personSchema)