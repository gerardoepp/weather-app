import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../../App.css'
import {ActionCreators} from '../../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)
const mapStateToProps = (state) => {
  return {
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)