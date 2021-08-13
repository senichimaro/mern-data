import React, { useState, useEffect } from 'react'
import { getData } from '../../services/request'

import List from '../components/List'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import NoData from '../components/NoData'

const ListPage = () => {

  // state variables
  const [ isLoading, setIsLoading ] = useState(true)
  // const [ isModalOpen, setIsModalOpen ] = useState(false)

  // data variables
  const [ listData, setListData ] = useState([])
  // const [ modalData, setModalData ] = useState([])


  useEffect(() => {

    async function loadData(){
      const response = await getData()

      setListData( response.data.data )
      setIsLoading( false )

      // if ( !response.data.success ){
      //   setIsModalOpen( true )
      //   setModalData( response.data )
      // }

    }

    loadData()
  },[])

  if ( isLoading && !listData.length ) return <Loading />

  // if ( isModalOpen ) return <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

  if ( !isLoading && listData.length ) return <List listData={listData} />

  return <NoData />


}

export default ListPage
