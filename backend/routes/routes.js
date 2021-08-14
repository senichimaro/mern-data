const express = require('express')
const endpoints = express.Router()
const {
  getData,
  newData,
  findData,
  findTitle,
  editData,
  deleteData
} = require('../controllers/controllers')
const upload = require('../libs/storage')

endpoints.get('/', getData)

endpoints.post('/data/newdata', upload.single('image'), newData)

endpoints.post('/data/finddata', findData)

endpoints.post('/data/findTitle', findTitle)

endpoints.put('/data/editdata', upload.single('image'), editData)

endpoints.delete('/data/deletedata', deleteData)



module.exports = endpoints
