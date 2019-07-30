import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const NavBar = (props) => {
  let nav =
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/About' className='NavBar-link'>ABOUT ME</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/Projects'>PROJECTS</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/Contact' className='NavBar-link'>CONTACT ME</Link>
    </div>
    return (
        <div className='NavBar'>
          {nav}
        </div>
      );
}

export default NavBar;