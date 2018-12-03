import Regions from 'react-wavesurfer/src/plugins/regions';

class MyRegions extends Regions {
  shouldComponentUpdate() {
    return true
  }
}
export default MyRegions;
