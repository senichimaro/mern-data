import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { postData, editData } from '../../services/request'

import Form from '../components/Form'
import Modal from '../components/Modal'

const FormPage = () => {

  /** # New Form
  */
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ modalData, setModalData ] = useState([])

  const handleSubmit = async formData => {
    const { _id } = formData;
    let response
    if ( _id ) response = await editData( formData )
    else response = await postData( formData )

    setModalData( response.data )
    if ( !response.data.success ) setIsModalOpen( !response.data.success )
    else setIsModalOpen( response.data.success )
  }


  /** # Edit Form
  */
  const { id } = useParams()
  const [ isDataID, setIsDataID ] = useState( id )





  return (
    <>
      <Form postID={isDataID} handleSubmit={handleSubmit} />
      <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )

}

export default FormPage
