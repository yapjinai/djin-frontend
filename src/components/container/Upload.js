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
            name='submit'
            type='submit'
            value='Upload'
          />
        </form>
      </div>
    );
  }

  // <input
  // id='upload'
  // name='upload'
  // type='file'
  // name='upload'
  // accept='audio/*'
  // // multiple={true}
  // />
  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = document.querySelector('#upload-form')
    const formData = new FormData(form)
    console.log(formData);

    // const input = document.querySelector('#upload')
    // const file = input.files[0]
    // formData.append('file', file)
    // console.log(file);

    fetch(uploadedSongsApi, {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then(json => console.log(json))
  }
}

export default Upload;

// <label
// className='upload label'
// for="upload"
// >
// Choose file
// </label>
