import * as React from 'react';

const MenuHamburger = () => (
  <svg id="gnb_svg" width="40px" height="40px" className="gnb_svg pointer">
    <g transform="matrix(1,0,0,1,2,7)">
      <rect x="0" y="0" width="26" height="1" rx="1" ry="1" data-svg-origin="12 1"></rect>
      <rect x="0" y="8" width="26" height="1" rx="1" ry="1" data-svg-origin="12 8"></rect>
      <rect x="0" y="16" width="26" height="1" rx="1" ry="1" data-svg-origin="8 15"></rect>
    </g>
  </svg>
);

export default MenuHamburger;
