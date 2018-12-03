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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sem lorem, vel finibus metus pharetra id. Vestibulum sit amet massa id lectus posuere vehicula at sagittis ex. Pellentesque iaculis lacus vel ex tincidunt aliquam. Donec a euismod mi. Nulla porttitor, nisl nec hendrerit condimentum, nulla mauris dignissim mauris, volutpat tristique tellus felis eu dolor. Praesent in dui vel felis lacinia lacinia. Etiam risus eros, fermentum eu feugiat id, pellentesque id magna. Nulla aliquam cursus justo eu luctus. Nam laoreet lorem vitae ex sagittis, et pellentesque augue egestas. Nunc posuere eget urna vel ultrices. Vivamus quam arcu, tincidunt eget orci suscipit, tristique bibendum ipsum. Proin condimentum euismod rhoncus. Nullam lectus ligula, volutpat at malesuada non, malesuada eu est. Aliquam a pretium ex. Cras mattis dolor vitae blandit ultricies.
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
