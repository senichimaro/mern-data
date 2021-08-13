import React from 'react'
import { Link } from 'react-router-dom'


const NoData = () => {
  return (
    <div className="container d-flex align-items-center flex-column my-5">
      <p>Nothing to show</p>
      <Link className="btn btn-success" to="/new">Create</Link>
    </div>
  )
}

export default NoData
