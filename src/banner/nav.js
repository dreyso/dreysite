import React from "react";

const Nav = React.forwardRef(({ sections }, ref) => {
  return (
    <nav ref={ref} id="nav-menu">
      {sections.map((section) => (
        <a href={`#${section.toLowerCase()}`} className="highlight-first" key={section}>
          {section}
        </a>
      ))}
    </nav>
  );
});

export default Nav;
