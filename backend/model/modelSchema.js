const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
  title:{type:String},
  body:{type:String},
  imgUrl:{type:String},
  tags:[String],
  keywords:[String]
})

DataSchema.methods.setImgUrl = function setImgUrl( url, filename ){
  this.imgUrl = `${url}/public/${filename}`
}

module.exports = mongoose.model( 'DataSchema', DataSchema )
