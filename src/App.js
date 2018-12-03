import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'
import PhotoJson from './PhotoJson'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/" className="title">
            Things I Like
          </Link>
          <h2>A Photo Gallery by John Flynn</h2>

          <Route exact path="/" component={CategoryList} />
          <Route path="/category/" component={CategoryList} />
          <Route exact path="/:subject/" component={PhotoList} />
          <Route path="/:subject/:number/" component={PhotoDetail} />
        </div>
      </Router>
    )
  }
}

export default App
