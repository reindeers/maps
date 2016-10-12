import React from 'react'
import ListItem from '../../components/ListItem/ListItem';

class UserList extends React.Component {
  render() {
    return (
      <ListItem
            src={this.props.src}
            username={this.props.username}
            email={this.props.email}
            profileUrl={this.props.profileUrl}
      />
    )
  }
}

Map.propTypes = {
  username: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  profileUrl: React.PropTypes.string.isRequired,
};

export default UserList;
