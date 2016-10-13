import React from 'react';

import './Map.css';

class Map extends React.Component {

 componentWillReceiveProps(nextProps) {
    let data = nextProps.userData;
    let coords = nextProps.coords;
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVpbmRlZXJzIiwiYSI6ImNpdTRlNDZqeDAwMTAybm5yZTdqeXFsNXUifQ.o-PNUm0T5UKhnULu-Wowgw';
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/basic-v9',
        center: coords,
        zoom: 1
    });

    //map.setLayoutProperty('country-label-lg', 'text-field', '{name_ru}');

    map.on('load', function () {
    map.addSource("points", {
        "type": "geojson",
        "data": data
    });
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "layout": {
            "icon-image": "rocket-15",
            "text-field": "{userName}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
  });
}

  render() {
    return (
      <div id="map" data-t={this.props.coords}></div>
    )
  }
}

Map.propTypes = {
  userData: React.PropTypes.object.isRequired,
  coords: React.PropTypes.array.isRequired,
};

export default Map;
