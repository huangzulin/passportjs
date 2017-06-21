var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: String,
    nickname:String,
    avatar:String,
    password: String,
    email:String,
    createTime: Date
})

module.exports = mongoose.model('user', schema)