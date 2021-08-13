import React from 'react'

const Loading = () => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <div className="spinner-border" style={{width: "6rem", height: "6rem"}} role="status"></div>
      <span>Loading</span>
    </div>
  )
}

export default Loading
