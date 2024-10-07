import React from "react";
import { MdMenuOpen, MdMenu } from "react-icons/md";

const NavToggle = ({ menuVisible, onToggle }) => {
  return (
    <button
      id="mobile-menu-toggle"
      className={menuVisible ? 'menu-button-clicked' : ''}
      aria-controls="mobile-menu"
      aria-expanded={menuVisible}
      aria-label="Open mobile menu"
      onClick={onToggle}
    >
      {menuVisible ? <MdMenuOpen className='mobile-menu-icon' style={{ color: 'black' }} /> : <MdMenu className='mobile-menu-icon' />}
    </button>
  );
};

export default NavToggle;
