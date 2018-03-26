//定义comment model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//获取Schema
const CommentSchema = new Schema({
  "iconUrl":String,
  "area":String,
  "city":String,
  "comment":String,
  "createtime":Number,
  "nick":String,
  "star":Number
});

const ItemSchema = new Schema({
  "id":String,
  "title":String,
  "name":String,
  "desc":String,
  "price":Number,
  "oldPrice":Number,
  "orderCount":Number,
  "soldCount":Number,
  "commentCount":Number,
  "accept":String,
  "praise":String,
  "imgUrl":String,
  "company":String,
  "profile":String
});
const ShopSchema = new Schema({
  "serviceIndex":String,
  "serviceType":Array,
  "shopList":Array
});
const ServiceSchema = new Schema({
  "id":String,
  "title":String,
  "orderCount":Number,
  "positiveRate":String,
  "imgUrl":String
});
const CitySchema = new Schema({
  name:String
});


//创建一个Model用来操作数据库
//Model和数据库中集合进行映射，通过model可以来对集合进行操作
//mongoose.model('集合名',模型对象（Schema）,database中的集合名 )
var Comment = mongoose.model('comment', CommentSchema,'comments')
var City = mongoose.model('city', CitySchema,'cities')
var Service = mongoose.model('service', ServiceSchema,'service')
var Item = mongoose.model('item', ItemSchema,'item')
var Shop = mongoose.model('shop', ShopSchema,'shop')

module.exports = {Comment:Comment, City:City, Service:Service, Item:Item, Shop:Shop}