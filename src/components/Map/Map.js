import React from 'react';


class Map extends React.Component {

  componentDidMount() {
    const chords = this.props.chords;

    mapboxgl.accessToken = 'pk.eyJ1IjoicmVpbmRlZXJzIiwiYSI6ImNpdTRlNDZqeDAwMTAybm5yZTdqeXFsNXUifQ.o-PNUm0T5UKhnULu-Wowgw';
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: chords,
        zoom: 9
    });
  }
  render(){
    return (
      <div id="map" style= {{width: 400 +'px', height: 300+'px'}} ></div>
    )
  }
}

Map.propTypes = {
  username: React.PropTypes.string.isRequired,
  chords: React.PropTypes.array.isRequired,
  src: React.PropTypes.string.isRequired,
};

export default Map;
