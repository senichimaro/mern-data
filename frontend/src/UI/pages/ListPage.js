import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getData, findData } from '../../services/request'

import List from '../components/List'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import NoData from '../components/NoData'

const ListPage = () => {

  // state variables
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  // data variables
  const [ listData, setListData ] = useState([])
  const [ modalData, setModalData ] = useState([])

  async function loadData(){
    const response = await getData()

    setListData( response.data.data )
    setIsLoading( false )

    if ( !response.data.success ){
        setIsModalOpen( true )
        setModalData( response.data )
      }

    }

  useEffect(() => {
    loadData()
  },[])

  const history = useHistory()
  async function handleRead( dataID ){
    const response = await findData( dataID )
    if ( response.data.success ){
      const data = response.data.data
      const url = data.title.replace(/\s/g,'-')
      const location = {
        pathname:`/${url}`,
        state:{data}
      }
      history.push(location)
    }
  }

  if ( isLoading && !listData.length ) return <Loading />

  if ( isModalOpen ) return <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

  if ( !isLoading && listData.length ) return <List listData={listData} loadData={loadData} handleRead={handleRead} />

  return <NoData />


}

export default ListPage
