const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    title : String
})

const Users = mongoose.model('User', userSchema)

module.exports = {
    Users
}