import Wavesurfer from 'react-wavesurfer';

class MyWavesurfer extends Wavesurfer {
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentDidUpdate() {
    console.log('Wavesurfer updating');
  }

}
export default MyWavesurfer;
