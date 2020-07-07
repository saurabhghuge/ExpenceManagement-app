import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Footer = () => (
  <footer className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expenses Management</h1>
        </Link>
        
      </div>
       <NavLink className = "second__header"  to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
      <NavLink className = "second__header"  to="/help" activeClassName="is-active">About</NavLink>
      <button className= "button--link" onClick={startLogout}>Logout</button>

    </div>
  </footer>
);