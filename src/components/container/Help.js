import React, { Component } from 'react';
import Info from '../presentational/Info';
// import addKeyboardShortcutsHelp from '../KeyboardShortcutsHelp';
import {keyboardShortcutsFunction} from '../keyboardShortcutsFunction'

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

      <Info />

      </div>
    );
  }

  componentDidMount() {
    this.clearHelpOnClick()


    // addKeyboardShortcutsHelp.bind(this)()
    keyboardShortcutsFunction.bind(this)('help')

  }

  ///////////////////

  setInfoVisibility = () => {
    const button = document.querySelector('.help')
    const info = document.querySelector('.Info')

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
    if (e) {
      e.preventDefault()
    }
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

  clearHelpOnClick = () =>  {
    const button = document.querySelector('.help')
    const info = document.querySelector('.Info')

    document.addEventListener('click', (e) => {
      if (this.state.shown &&
        // there has to be a better way...........
        e.target !== info &&
        e.target !== button &&
        e.target.parentElement !== info &&
        e.target.parentElement !== button &&
        e.target.parentElement.parentElement !== info &&
        e.target.parentElement.parentElement !== button &&
        e.target.parentElement.parentElement.parentElement !== info &&
        e.target.parentElement.parentElement.parentElement !== button
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

}

export default Help;
