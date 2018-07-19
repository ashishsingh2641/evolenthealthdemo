import React, { Component } from 'react';
import SearchComponent from './subComponents/SearchComponent';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation_header">
            <i className="material-icons menu mr-5" onClick={this.props.toggleMenu}>{this.props.Icon}</i>
            <div className="row w-100">
                <div className="col-2 nar_brand">Contact List</div>
                <div className="col-7">
                    <SearchComponent />
                </div>
                <div className="col-3 text-right right_menu">
                <ul className="nav float-right">
                    <li className="nav-item mr-4">
                        <i className="material-icons">apps</i>
                    </li>
                    <li className="nav-item mr-4">
                    <i className="material-icons bell">notifications_none</i>
                    </li>
                    <li className="nav-item mr-4" />
                </ul>
                </div>
            </div>
      </nav>
    )
  }
};

export default Header;
