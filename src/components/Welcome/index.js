// Write your code here
import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button className="button">Subscribe</button>
    }
    return <button className="button">Subscribed</button>
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
