import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { findTitle } from '../../services/request'

import photo from '../assets/images/post-bg.jpg'
import '../assets/css/styles.css'

const DataPage = () => {

  const history = useHistory()
  const { title } = useParams()

  const [ isData, setIsData ] = useState({})


  async function _findTitle( title ){
    const titleParam = title.replace(/\W/g,' ').trim()
    const response = await findTitle( titleParam )
    setIsData( response.data.data )
  }

  useEffect(() => {
    if ( history.location.state ) setIsData(history.location.state)
    else _findTitle( title )
  },[])



  return (
    <>
      {
        isData
        ? (
            <>
            <header className="masthead" style={{backgroundImage: `url(${photo})`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="post-heading">
                            { isData &&
                                <h1>
                                    {isData.title}
                                </h1>
                              }
                                <span className="meta">
                                    Posted
                                    on August 24, 2021
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>{isData.body}</p>
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>
                                &middot; Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>


            <footer className="border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
                        </div>
                    </div>
                </div>
            </footer>
          </>
        )
      : null
    }
  </>
 )

}

export default DataPage
