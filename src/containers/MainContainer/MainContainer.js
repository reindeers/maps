import React from 'react'
import UserList from '../UserList/UserList';
import Map from '../../components/Map/Map';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    this.data = [];
    let self = this;
      fetch('http://localhost:4000/features/')
            .then(function(response) {
                return response.json();
             }).then(function(res){
               let data = res.features;
               for (let i in data) {
                 console.log(self.data);
                 self.data[i] = {};
                 self.data[i].id = data[i].properties.id;
                 self.data[i].username = data[i].properties.userName;
                 self.data[i].src = data[i].properties.avatar;
                 self.data[i].email = data[i].properties.email;
                 self.data[i].profileUrl = data[i].properties.url;
                 self.data[i].coords = data[i].geometry.coordinates;
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

        <Map coords={[-74.50, 40]}/>
      </div>
    )
  }
}

export default MainContainer;
