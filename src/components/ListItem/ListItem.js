import React from 'react';

import './ListItem.css';

class ListItem extends React.Component {
  render(){
    return (
      <section className="list__user-card">
          <div className="list__user-information">
              <div>
                  <img src={this.props.src} className="list__avatar"/>
              </div>
              <div className="list__user-information-text">
                  <h1 className="list__h1">{this.props.username}</h1>
                  <p className="list__p">{this.props.email}</p>
                  <span className="list__span"><a href={this.props.profileUrl}>посмотреть профиль</a></span>
              </div>
          </div>

      </section>
    )
  }
}

ListItem.propTypes = {
  src: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  profileUrl: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired
};

export default ListItem;
