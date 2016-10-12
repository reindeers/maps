import React from 'react';

class ListItem extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.src}/>
        <h1>{this.props.username}</h1>
        <p>{this.props.email}</p>
        <span>{this.props.profileUrl}</span>
      </div>
    )
  }
}

ListItem.propTypes = {
  src: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  profileUrl: React.PropTypes.string.isRequired
};

export default ListItem;
