import Wavesurfer from 'react-wavesurfer';
import { connect } from 'react-redux'

class MyWavesurfer extends Wavesurfer {


  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentWillReceiveProps(nextProps) {
    let newSource = false;
    let seekToInNewFile;

    // update audioFile
    if (this.props.audioFile !== nextProps.audioFile) {
      this.setState({
        isReady: false
      });
      this._loadAudio(nextProps.audioFile, nextProps.audioPeaks);
      newSource = true;
    }

    // update mediaElt
    if (this.props.mediaElt !== nextProps.mediaElt) {
      this.setState({
        isReady: false
      });
      this._loadMediaElt(nextProps.mediaElt, nextProps.audioPeaks);
      newSource = true;
    }

    // update peaks
    if (this.props.audioPeaks !== nextProps.audioPeaks) {
      if (nextProps.mediaElt) {
        this._loadMediaElt(nextProps.mediaElt, nextProps.audioPeaks);
      } else {
        this._loadAudio(nextProps.audioFile, nextProps.audioPeaks);
      }
    }

    // // if clicked inside a Region, make un-interactive
    // const regionStart = this.props.waveform.regions.loop.start
    // const regionEnd = this.props.waveform.regions.loop.end
    //
    // if (nextProps.pos > regionStart && nextProps.pos < regionEnd) {
    //   this._wavesurfer.params.interact = false
    // }
    // else {
    //   this._wavesurfer.params.interact = true
    //
    // }

    // update position
    if (
      nextProps.pos !== undefined &&
      this.state.isReady &&
      nextProps.pos !== this.props.pos &&
      nextProps.pos !== this.state.pos
    ) {
      if (newSource) {
        seekToInNewFile = this._wavesurfer.on('ready', () => {
          this._seekTo(nextProps.pos);
          seekToInNewFile.un();
        });
      } else {
        this._seekTo(nextProps.pos);
      }
    }

    // update playing state
    if (
      !newSource &&
      (this.props.playing !== nextProps.playing ||
        this._wavesurfer.isPlaying() !== nextProps.playing)
    ) {
      if (nextProps.playing) {
        this._wavesurfer.play();
      } else {
        this._wavesurfer.pause();
      }
    }

    // update volume
    if (this.props.volume !== nextProps.volume) {
      this._wavesurfer.setVolume(nextProps.volume);
    }

    // update zoom
    if (this.props.zoom !== nextProps.zoom) {
      this._wavesurfer.zoom(nextProps.zoom);
    }

    // update audioRate
    if (this.props.options.audioRate !== nextProps.options.audioRate) {
      this._wavesurfer.setPlaybackRate(nextProps.options.audioRate);
    }

    // update backend - DOESN'T WORK (updating works, but wavesurfer doesnt change)
    if (this.props.options.backend !== nextProps.options.backend) {
      this._wavesurfer.params.backend = nextProps.options.backend
    }

    // turn responsive on
    if (
      nextProps.responsive &&
      this.props.responsive !== nextProps.responsive
    ) {
      window.addEventListener('resize', this._handleResize, false);
    }

    // turn responsive off
    if (
      !nextProps.responsive &&
      this.props.responsive !== nextProps.responsive
    ) {
      window.removeEventListener('resize', this._handleResize);
    }
  }
}

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state, ownProps) => ({
  waveform: state.waveforms[ownProps.side]
})

const connectedMyWavesurfer = connect(
  mapStateToProps
)(MyWavesurfer)


export default connectedMyWavesurfer;
