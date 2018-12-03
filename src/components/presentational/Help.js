import React, { Component } from 'react';

class Help extends Component {
  state = {
    shown: false
  }

  render() {
    this.setInfoVisibility()

    return (
      <div className="Help">
      <button
      className='help'
      onClick={this.handleClick}
      >
        ?
      </button>

      <div className='info hidden'>
        <label>Shortcuts:</label>
        <ul>
          <li>
            Space: play/pause master
          </li>
          <li>
            ←, →: crossfade left/right
          </li>
          <li>
            ↑, ↓: BPM up/down
          </li>
          <li>
            Q, P: play/pause left/right
          </li>
          <li>
            S, L: toggle looping left/right
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut velit in libero maximus dapibus quis quis arcu. Donec nisi metus, tempor ultrices finibus eget, posuere vitae nisl. Quisque rutrum nibh ut turpis faucibus, vel elementum leo pellentesque. Ut blandit nisl mauris, id volutpat ex dapibus lobortis. Sed sit amet lobortis arcu. Phasellus dignissim nibh quis gravida rhoncus. Vivamus pulvinar mauris purus, et feugiat metus sollicitudin eu.
        </p>
      </div>
      </div>
    );
  }

  componentDidMount() {
    const button = document.querySelector('.help')
    const info = document.querySelector('.info')

    document.addEventListener('click', (e) => {
      if (this.state.shown &&
        e.target !== info &&
        e.target !== button
      ) {
        this.setState({
          shown: false
        })
      }
    })
    document.addEventListener('keydown', (e) => {
      if (e.key !== ' ') {
        this.setState({
          shown: false
        })
      }
    })
  }

  ///////////////////

  setInfoVisibility = () => {
    const button = document.querySelector('.help')
    const info = document.querySelector('.info')

    if (button && info) {
      if (this.state.shown) {
        button.innerText = 'x'
        info.classList.remove('hidden')
      }
      else {
        button.innerText = '?'
        info.classList.add('hidden')
      }
    }
  }
  handleClick = (e) => {
    e.preventDefault()
    if (this.state.shown) {
      this.setState({
        shown: false
      })
    }
    else {
      this.setState({
        shown: true
      })
    }
  }
}

export default Help;
