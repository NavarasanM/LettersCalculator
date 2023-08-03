import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  userInput = e => {
    this.setState({word: e.target.value})
  }

  render() {
    const {word} = this.state

    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="letter">Enter the phrases</label>
          <br />
          <input
            id="letter"
            type="text"
            onChange={this.userInput}
            placeholder="Enter the phrases"
          />
          <br />
          <p className="wordCounter">No.of letters: {word.length}</p>
        </div>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calImage"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
