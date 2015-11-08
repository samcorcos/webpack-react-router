import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="other">Other</Link><br/>
        <Link to="settings">Settings</Link>
        <h1>This is the Home component.</h1>
      </div>
    )
  }
}
