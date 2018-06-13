import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <div className='home'>
        Welcome to the Home Page
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
