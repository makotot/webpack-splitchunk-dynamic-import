import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import loadable from 'loadable-components'
import Loading from './loading'

const Home = loadable(() => import('./home' /* webpackChunkName: 'home' */))
const PageOne = loadable(() => import('./pageOne.js' /* webpackChunkName: 'pageOne' */))
const PageTwo = loadable(() => import('./pageTwo.js' /* webpackChunkName: 'pageTwo' */))

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pageOne">Page One</Link></li>
        <li><Link to="/pageTwo">Page Two</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pageOne" component={PageOne}/>
        <Route exact path="/pageTwo" component={PageTwo}/>
      </Switch>
    </div>
  </Router>
)

export default App
