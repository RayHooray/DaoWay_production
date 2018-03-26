const mongoose = require('mongoose')
const Schema = mongoose.Schema

//引入数据库启动的js
require('./connectToDB')
module.exports = function (collectName) {
  return mongoose.model(collectName)
}



