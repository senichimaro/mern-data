import React, { useState, useRef, useEffect } from 'react'
import { findData } from '../../services/request'

const Form = ({ handleSubmit, postID }) => {

  /** # Displaying Image Functinoality
  */
  // Image Object
  const [ imgObj, setImgObj ] = useState({})
  // Image Reference
  const inputFileRef = useRef()
  // Image Src Display
  const [ isImgSrc, setIsImgSrc ] = useState('')

  // Save Image in their Object
  const handleImgObj = () => {
    setImgObj( inputFileRef.current.files[0] )
    setIsImgSrc( URL.createObjectURL(inputFileRef.current.files[0]) )
  }
  // Discard Display Image
  const handleDiscardImg = () => {
    setIsImgSrc('')
  }




  /** # Edit Form
  */
  const [ isID, setIsID ] = useState(postID)

  useEffect(() => {
    async function loadData( dataID ){
      const response = await findData( dataID )
      setFormValues( response.data.data )
      setIsImgSrc( response.data.data.imgUrl )
    }
    loadData( isID )
  },[isID])


  /** # New Form
  */
  const [ formValues, setFormValues ] = useState({
    title:'',
    body:'',
    imgUrl:'',
    tags:'',
    keywords:''
  })

  // LOCAL submit hadler
  const _handleSubmit = event => {
    event.preventDefault()
    handleSubmit({...formValues,image:imgObj })
  }
  // LOCAL Input handler
  const handleInput = event => {
    event.preventDefault()
    const { name, value } = event.target
    setFormValues({...formValues,[name]:value})
  }


  return (
    <div className="container my-5">
      <form onSubmit={_handleSubmit}>

        {
          isImgSrc
          ? (
            <>
              <img src={isImgSrc} className="img-fluid w-25" alt="previewer" />
              <span className="d-block" onClick={handleDiscardImg} style={{cursor:'pointer'}}>
                Discard Image
                <i className="bi bi-trash-fill"></i>
              </span>
            </>
          )
          : (
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="exampleInputEmail1">image</label>
              <input onChange={handleImgObj} ref={inputFileRef} type="file" className="form-control" id="exampleInputEmail1" />
            </div>
          )
        }

        <div className="form-floating mb-3">
          <input name="title" value={formValues.title} onChange={handleInput} type="text" className="form-control" id="title" placeholder="title"/>
          <label htmlFor="title">title</label>
        </div>

        <div className="form-floating mb-3">
          <textarea name="body" value={formValues.body} onChange={handleInput} className="form-control" id="body" style={{height:"10rem"}} placeholder="body"></textarea>
          <label htmlFor="body">body</label>
        </div>

        <div className="form-floating mb-3">
          <input name="tags" value={formValues.tags} onChange={handleInput} type="text" className="form-control" id="tags" placeholder="tags"/>
          <label htmlFor="tags">tags</label>
        </div>

        <div className="form-floating mb-3">
          <input name="keywords" value={formValues.keywords} onChange={handleInput} type="text" className="form-control" id="keywords" placeholder="keywords"/>
          <label htmlFor="keywords">keywords</label>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )

}

export default Form
