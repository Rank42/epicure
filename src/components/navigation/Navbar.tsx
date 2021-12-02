import React from 'react'

import LeftNav from './LeftNav';
import RightNav from "./RightNav";

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    return ( 
        <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <LeftNav/>
        <RightNav/>
      </div>
    </nav>
  </div>
     );
}
 
export default Navbar;