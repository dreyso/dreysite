import React from "react";
import { MdMenuOpen, MdMenu } from "react-icons/md";

const MobileMenuToggle = ({ menuVisible, onToggle }) => {
  return (
    <button
      id="mobile-menu-toggle"
      className={menuVisible ? 'menu-button-clicked' : ''}
      aria-controls="mobile-menu"
      aria-expanded={menuVisible}
      aria-label="Open mobile menu"
      onClick={onToggle}
    >
      {menuVisible ? <MdMenuOpen size={35} style={{ color: 'black' }} /> : <MdMenu size={35} />}
    </button>
  );
};

export default MobileMenuToggle;
