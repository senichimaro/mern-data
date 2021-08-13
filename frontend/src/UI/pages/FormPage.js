import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { postData } from '../../services/request'

import Form from '../components/Form'
import Modal from '../components/Modal'

const FormPage = () => {

  /** # New Form
  */
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ modalData, setModalData ] = useState([])

  const handleSubmit = async formData => {
    const response = await postData( formData )
    setModalData( response.data )
    setIsModalOpen( response.data.success )
  }


  /** # Edit Form
  */
  const { id } = useParams()
  const [ isDataID, setIsDataID ] = useState(id)





  return (
    <>
      <Form postID={isDataID} handleSubmit={handleSubmit} />
      <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )

}

export default FormPage
