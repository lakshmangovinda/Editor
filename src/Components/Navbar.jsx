import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { IconContext } from 'react-icons';
import TreeMenu from './Treemennu';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='navbar-item1'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} style={{ color: "black" }} />
            </Link>
            <div className='search-bar input-group'>
              <span><FaIcons.FaSistrix onClick={showSidebar} style={{ color: "grey", height: "1rem" }} /></span>
              <input type="text" className="form-control input-search" name="search" id="search" placeholder="Search"></input>
            </div>
          </div>
          <div className='navbar-item2'>
            <p><FaIcons.FaUserPlus  style={{ color: "grey", fontSize: "1rem" }} />Invite Team Members</p>
            <FaIcons.FaRegBell  style={{ color: "grey", height: "1rem" }} />
            <FaIcons.FaUserCircle style={{ color: "grey", fontSize: "2rem" }} />

          </div>
        </div>
        <div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{marginTop:"80px",width:"25vw"}}>
          <ul className='nav-menu-items' >
           
              <Link to='#' className='menu-bars'>
                <div className='d-flex justify-content-between ' style={{fontSize:"1rem",width:"15vw"}}>
                <p>All</p>
                <p>Board</p>
                <p>Graph</p>
                <p>Recent</p>  
                </div>
                {/* <AiIcons.AiOutlineClose onClick={showSidebar} style={{ color: "black" }} /> */}
              </Link>
       <div> </div>
            <TreeMenu></TreeMenu>
          </ul>
        </nav>
  
       
        </div>
        <div style={sidebar?{marginLeft:'30vw'}:{}}>ksjdkasjkj
    
    </div>
        
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;