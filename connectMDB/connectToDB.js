/*
* db模块，专门负责链接数据库，不用暴露，因为自负责链接，没有任何变量暴露
* */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/daoway')
mongoose.connection.once('open',function(err) {
  if(!err) {
    console.log('数据库连接成功，数据库名：daoway',{useMongoClient:true})
  }else{
    console.log(err)
  }
})