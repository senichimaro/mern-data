import axios from 'axios'
import { baseUrl } from '../config'

export async function getData(){
  try {
    const response = await axios({
      mothod:'get',
      url:baseUrl
    })
    return response
  }
  catch(e) {
    console.error(`ERROR at request.js getData: ${e.message}`);
  }
}


export async function postData( userData ){

  try {
    // console.log(`userData: ${userData.title}`);
    const formData = new FormData()
    formData.append('title', userData.title)
    formData.append('body', userData.body)
    formData.append('image', userData.image)
    formData.append('tags', userData.tags)
    formData.append('keywords', userData.keywords)

    const response = await axios({
      method:'post',
      url:`${baseUrl}/data/newdata`,
      data:formData
    })

    return response

  }
  catch(e) {
    console.error(`ERROR at request.js postData: ${e.message}`);
  }

}


export async function findData( dataID ){

  try {
    const response = await axios({
      method:'post',
      url:`${baseUrl}/data/finddata`,
      data:{id:dataID}
    })

    return response
  }
  catch(e) {
    console.error(`ERROR at request.js findData: ${e.message}`);
  }

}


export async function findTitle( dataTitle ){

  try {
    const response = await axios({
      method:'post',
      url:`${baseUrl}/data/findtitle`,
      data:{title:dataTitle}
    })

    return response
  }
  catch(e) {
    console.error(`ERROR at request.js findData: ${e.message}`);
  }

}


export async function deleteData( dataID ){

  try {
    const response = await axios({
      method:'delete',
      url:`${baseUrl}/data/deletedata`,
      data:{id:dataID}
    })

    return response
  }
  catch(e) {
    console.error(`ERROR at request.js deleteData: ${e.message}`);
  }

}
