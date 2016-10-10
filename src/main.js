import React from 'react'
import UserList from './containers/UserList/UserList';
import Map from './components/Map/Map';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <UserList/>
    <Map
      chords={[-74.50, 40]}
      username="Fedia"
      src="http://"
    />
  </div>,
  document.getElementById('app')
)
