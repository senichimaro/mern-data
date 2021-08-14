import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import 'bootswatch/dist/morph/bootstrap.min.css'
import 'bootstrap-icons/font//bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import ListPage from './UI/pages/ListPage'
import FormPage from './UI/pages/FormPage'
import DataPage from './UI/pages/DataPage'
import Navabar from './UI/components/Navabar'

function App() {
  return (
    <>
    <Router>
      <Navabar />
      <Switch>


        <Route exact path='/'>
          <ListPage />
        </Route>

        <Route exact path='/new'>
          <FormPage />
        </Route>

        <Route path='/data/edit/:id'>
          <FormPage />
        </Route>

        <Route path='/:title/'>
          <DataPage />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
