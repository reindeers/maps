import React from 'react'
import ListItem from '../../components/ListItem/ListItem';
import Map from '../../components/Map/Map';

import './MainContainer.css';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = { users: [], geoJson: {} };
  }

  componentDidMount() {
    let resultData = [];
    let self = this;
    fetch('http://localhost:4000/features/')
      .then(function(response) {
          return response.json();
        }).then(function(res){
          let data = res.features;
          for (let i in data) {
              resultData[i] = {};
              resultData[i].id = data[i].properties.id || -1;
              resultData[i].username = data[i].properties.userName || 'Неизвестно';
              resultData[i].src = data[i].properties.avatar;
              resultData[i].email = data[i].properties.email || 'Неизвестно';
              resultData[i].profileUrl = data[i].properties.url || 'Неизвестно';
              resultData[i].color = data[i].properties.color || '#fff';
              resultData[i].coords = data[i].geometry.coordinates || [0, 0];
            }
            self.setState({users: resultData, geoJson: res});
          })
          .catch( console.log );
  }

  render() {
    return (
          <div className="main-container">
            <div className="list">
                {this.state.users.map((result) => (
                    <ListItem key={result.id}
                        src={result.src}
                        username={result.username}
                        email={result.email}
                        profileUrl={result.profileUrl}
                        color={result.color}
                    />
                ))}
              </div>
              <Map
                coords={[-50.3932,
        82.1649]}
                userData={this.state.geoJson}
              />
          </div>
    )
  }
}

export default MainContainer;
