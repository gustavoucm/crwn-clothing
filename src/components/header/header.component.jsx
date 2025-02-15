import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { ReactComponent as Logo} from '../../assets/crown.svg';
const Header = ({ currentUser }) => (
  <div className="header">
    <Link  className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
        :
        <Link className="option" to="/signin">
          Sign in
        </Link>
      }
    </div>
  </div>
);

export default Header;