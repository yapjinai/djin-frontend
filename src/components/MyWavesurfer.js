import Wavesurfer from 'react-wavesurfer';

class MyWavesurfer extends Wavesurfer {
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
}
export default MyWavesurfer;
