import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return //still deciding
      case false:
        return <li><a href="/auth/google">Login With Google</a></li> //im logged out
      default: 
        return <li><a href="/api/logout">Logout</a></li> //im logged in
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={ this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
