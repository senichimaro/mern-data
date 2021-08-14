import React from 'react'
import { Link } from 'react-router-dom'
import { list } from '../../config'
import { deleteData } from '../../services/request'

const List = ({ listData, loadData, handleRead }) => {

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {
              list.tableHead.map(({ name }) => ( <TableHead name={name} key={name} /> ))
            }
          </tr>
        </thead>
        <tbody>

          {
            listData.map(({ _id, title, body, imgUrl, tags, keywords }) => (
              <TableRow key={_id}
                _id={_id}
                title={title}
                body={body}
                imgUrl={imgUrl}
                tags={tags}
                keywords={keywords}
                loadData={loadData}
                handleRead={handleRead}
              />

            ))
          }


        </tbody>
      </table>
    </div>
  )

}

function TableHead({ name }){
  return <th scope="col">{name}</th>
}

function TableRow({ _id, title, body, imgUrl, tags, keywords, loadData, handleRead }){

  const _handleDelete = async event => {
    event.preventDefault()
    const itemEl = event.target
    const itemID = itemEl.getAttribute('name')
    const response = await deleteData( itemID )
    loadData()
  }

  const _handleRead = event => {
    event.preventDefault()
    const itemEl = event.target
    const itemID = itemEl.getAttribute('name')
    handleRead( itemID )
  }

  return (
    <tr>
      <th scope="row">{_id.split('').reverse().join('').substring(0,5)}...</th>
      <td>{title}</td>
      <td>{body.substring(0,15)}...</td>
      <td>
        {
          imgUrl
          ? <img src={imgUrl} style={{width:"3rem"}} alt={title}/>
          : 'No Image'
        }
      </td>
      <td>{tags.join(", ")}</td>
      <td>{keywords.join(", ")}</td>
      <td>
        <Link onClick={_handleRead} to={`${title.replace(/\s/g,'-')}/${_id}`} >
          <i className="bi bi-file-earmark" name={ _id }></i>
        </Link>

        <Link to={`/data/edit/${_id}`}>
          <i className="bi bi-pencil-square"></i>
        </Link>

        <Link onClick={_handleDelete} to={`/`} >
          <i className="bi bi-trash-fill" name={ _id }></i>
        </Link>
      </td>
    </tr>
  )
}

export default List
