import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import Navbar from './common/Navbar';
import Home from './pages/Home';
import Animation from './pages/Animation'
import About from './pages/About';
import './app.css';

// nav links
const links = [
  { path: '/home', text: 'Home' },
  { path: '/animation', text: 'Animation' },
  { path: '/about', text: 'About' }
];

// routes animation container
const Routes = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    staggerChildren: 50,
    beforeChildren: true,
    delay: 300
  },
  exit: {
    opacity: 0,
    y: 90,
    staggerChildren: 20,
    staggerDirection: -1
  }
});

const App = ({ location }) => {
  return (
    <>
      <Navbar links={links} />
      <div className="container">
        <PoseGroup>
          <Routes key={shortid.generate()} className="routes">
            <Switch location={location}>
              <Route path='/home' component={Home} />
              <Route path='/animation' component={Animation} />
              <Route path='/about' component={About} />
              <Redirect to='/home' />
            </Switch>
          </Routes>
        </PoseGroup>
      </div>
    </>
  )
}

export default withRouter(App);