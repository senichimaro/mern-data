const resJson = require('./utils')
const axios = require('axios')
const ModelSchema = require('../model/modelSchema')

async function getData(req,res){

  try {
    const response = await ModelSchema.find().lean().exec()
    resJson(res,false,response)
  }
  catch(e){
    console.error(`ERROR at controllers.js in getData: ${e.message}`);
  }

}

async function newData(req,res){

  try {

    // if( req.body.id ) console.log("req.body",req.body.id);
    // else console.log("req.body No ID");

    const {
      title,
      body,
      tags,
      keywords
    } = req.body


    const dataSchema = await ModelSchema.create({
      title,
      body,
      tags,
      keywords
    })

    if( req.file ){
      const { filename } = req.file
      const url = `${req.protocol}://${req.get('host')}`
      dataSchema.setImgUrl( url, filename )
    }

    const dataSaved = await dataSchema.save()

    resJson(res,false,dataSaved)

  }
  catch(e){
    console.error(`ERROR at controllers.js newData: ${e.message}`);
  }

}

async function findData(req,res){

  try {
    console.log("req.body",req.body);
    const { id } = req.body

    await ModelSchema.findById(
      id,
      (err,data) => resJson(res,err,data)
    )
  }
  catch(e){
    console.error(`ERROR at controllers.js findData: ${e.message}`);
  }

}

async function editData(req,res){

  try {

    const {
      id,
      title,
      body,
      tags,
      keywords
    } = req.body

    let objData = {
      title,
      body,
      tags,
      keywords
    }

    if( req.file ){
      const { filename } = req.file
      const url = `${req.protocol}://${req.get('host')}`
      const imgUrl = `${url}/public/${filename}`
      objData["imgUrl"] = imgUrl
    }

    await ModelSchema.findByIdAndUpdate(
      id,
      objData,
      {
        new:true
      },
      ( err, data ) => resJson( res, err, data)
    )

  }
  catch(e){
    console.error(`ERROR at controllers.js editData: ${e.message}`);
  }
}

async function deleteData(req,res){

  try {

    const { id } = req.body
    ModelSchema.findByIdAndDelete(
      id,
      ( err, data ) => resJson( res, err, data )
    )

  }
  catch(e) {
    console.error(`ERROR at controllers.js deleteData: ${e.message}`);
  }
}


module.exports = {
  getData,
  newData,
  findData,
  editData,
  deleteData
}
