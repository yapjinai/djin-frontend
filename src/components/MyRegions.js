import Regions from 'react-wavesurfer/src/plugins/regions';

class MyRegions extends Regions {
  shouldComponentUpdate() {
    return true
  }

  componentDidUpdate() {
    // console.log('Regions updating');
  }

  componentWillReceiveProps(nextProps) {
    // only update if the wavesurfer instance has been ready
    if (!this.props.isReady) {
      return;
    }

    // console.log(this.props.regions);
    // console.log(nextProps.regions);

    // cache reference to old regions
    const oldRegions = Object.create(this.props.wavesurfer.regions.list);
    let newRegionId;
    let oldRegionId;

    for (newRegionId in nextProps.regions) {
      if ({}.hasOwnProperty.call(nextProps.regions, newRegionId)) {
        const newRegion = nextProps.regions[newRegionId];

        // remove from oldRegions
        delete oldRegions[newRegionId];

        // new regions
        if (!this.props.wavesurfer.regions.list[newRegionId]) {
          this._hookUpRegionEvents(nextProps.wavesurfer.addRegion(newRegion));

          // update regions
        } else if (
          oldRegions[newRegionId] &&
          (oldRegions[newRegionId].start !== newRegion.start ||
            oldRegions[newRegionId].end !== newRegion.end ||
            oldRegions[newRegionId].loop !== newRegion.loop ||
            oldRegions[newRegionId].color !== newRegion.color)
        ) {
          nextProps.wavesurfer.regions.list[newRegionId].update({
            start: newRegion.start,
            end: newRegion.end,
            loop: newRegion.loop,
            color: newRegion.color,
          });
        }
      }
    }

    // remove any old regions
    for (oldRegionId in oldRegions) {
      if ({}.hasOwnProperty.call(oldRegions, oldRegionId)) {
        nextProps.wavesurfer.regions.list[oldRegionId].remove();
      }
    }
  }

}
export default MyRegions;
