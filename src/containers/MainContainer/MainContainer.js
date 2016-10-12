import React from 'react'
import UserList from '../UserList/UserList';
import Map from '../../components/Map/Map';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    resultData = [];
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

            self.setState({users: self.data});
          })
          .catch( console.log );
  }

  render() {
    const self = this;
    return (
          <div>
              {this.state.users.map((result) => (
                  <UserList key={result.id}
                      src={result.src}
                      username={result.username}
                      email={result.email}
                      profileUrl={result.profileUrl}
                  />
              ))}

              <Map
                coords={[-74.50, 40]}
                userData={this.state.users}
              />
          </div>
    )
  }
}

export default MainContainer;
