import {
  Link,
  useRouteMatch
} from 'react-router-dom'
import { routes } from '../../config'

const ListItem = ({ url, name }) => {
  const { path } = useRouteMatch()

  const changeActiveClass = event => {
    let link = document.getElementsByClassName('nav-link active')
    if( link[0] ) link[0].className = "nav-link"
    event.target.className ="nav-link active"
  }

  return (
    <li onClick={changeActiveClass} className="nav-item">
      <Link to={url} className={ path === url ? "nav-link active" : "nav-link"} aria-current="page">{name}</Link>
    </li>
  )
}

const Navabar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {
              routes.map(({ url, name }) => ( <ListItem url={url} name={name} key={name} /> ))
            }

          </ul>

        </div>
      </div>
    </nav>
  )

}

export default Navabar
