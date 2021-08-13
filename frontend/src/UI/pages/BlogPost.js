import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findPost } from '../../services/index'

const BlogPost = () => {
  const { id } = useParams()

  const [post, setPost] = useState({})

  const loadPost = async () => {
    if( id ){
      const response = await findPost( id )
      console.log("BlogPost response",response.data);
      // console.log("BlogPost response",response.data.data);
      if( response.data.success ) setPost( response.data.data )
    }
  }

  useEffect(() => {
    loadPost()
  },[])

  return (
    <>
      {
        id
        ? (
          <>
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>body: <br />{post.textarea}</p>
          </>
        )
        : null
      }
    </>
  )
}

export default BlogPost
