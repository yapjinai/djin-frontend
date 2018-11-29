import React, { Component } from 'react';
import '../../css/Upload.css';

const uploadedSongsApi = 'http://localhost:3000/uploaded_songs'

class Upload extends Component {
  render() {
    return (
      <div className='Upload'>
        <form
          id='upload-form'
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
          />
          <input
            type="text"
            name="bpm"
            placeholder="BPM (optional)"
          />
          <input
            id='upload'
            name='upload'
            type='file'
            name='upload'
            accept='audio/*'
            // multiple={true}
          />
          <input
            name='submit'
            type='submit'
            value='Upload'
          />
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = document.querySelector('#upload-form')
    const formData = new FormData(form)

    fetch(uploadedSongsApi, {
      method: 'POST',
      body: formData
    })
    .then(r => r.json())
    .then(console.log)

    e.target.reset()

    // todo: validations
  }

}

export default Upload;

// <label
// className='upload label'
// for="upload"
// >
// Choose file
// </label>
