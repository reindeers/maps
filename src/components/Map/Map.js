import React from 'react';

//import './Map.css';

class Map extends React.Component {

  componentDidMount() {
    const coords = this.props.coords;

    mapboxgl.accessToken = 'pk.eyJ1IjoicmVpbmRlZXJzIiwiYSI6ImNpdTRlNDZqeDAwMTAybm5yZTdqeXFsNXUifQ.o-PNUm0T5UKhnULu-Wowgw';
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: coords,
        zoom: 9
    });
  }
  render() {
    return (
      <div id="map" style= {{width: 400 + 'px', height: 300 + 'px'}} ></div>
    )
  }
}

Map.propTypes = {
  username: React.PropTypes.string.isRequired,
  coords: React.PropTypes.array.isRequired,
  src: React.PropTypes.string.isRequired,
};

export default Map;
