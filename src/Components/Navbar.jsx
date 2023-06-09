import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import TreeMenu from './Treemennu';
import Edit from './Editor';
import { Dropdown } from 'react-bootstrap';

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

              <input type="text" className="form-control input-search" name="search" id="search" placeholder="Search"></input>
            </div>
          </div>
          <div className='navbar-item2'>

            <p><FaIcons.FaUserPlus style={{ color: "grey", fontSize: "1rem" }} />Invite Team Members</p>
            <FaIcons.FaRegBell style={{ color: "grey", height: "1rem" }} />


            <Dropdown>
              <Dropdown.Toggle variant='' style={{ borderRadius: "35px" }} >
                <FaIcons.FaUserCircle style={{ color: "grey", fontSize: "2rem" }}></FaIcons.FaUserCircle>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Dark Mode <FaIcons.FaToggleOff style={{ color: "grey", marginLeft: "100px", fontSize: "1.5rem" }}></FaIcons.FaToggleOff></Dropdown.Item>
                <Dropdown.Item >Profile</Dropdown.Item>
                <Dropdown.Item >What's New </Dropdown.Item>
                <Dropdown.Item >Help </Dropdown.Item>
                <Dropdown.Item >Send feedback </Dropdown.Item>
                <Dropdown.Item >Hints and shortcuts</Dropdown.Item>
                <Dropdown.Item >Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ marginTop: "80px", width: "25vw" }}>
            <ul className='nav-menu-items' >

              <div className='menu-bars'>
                <div className='d-flex justify-content-between flex-row' style={{ fontSize: "1rem", width: "15vw" }}>
                  <p className='menu'>All</p>
                  <p className='menu'>Board</p>
                  <p className='menu'>Graph</p>
                  <p className='menu'>Recent</p>
                  <span>
                    <FaIcons.FaAngleDoubleLeft onClick={showSidebar} style={{ color: "grey", height: "1rem" }} />
                  </span>

                </div>
                {/* <AiIcons.AiOutlineClose onClick={showSidebar} style={{ color: "black" }} /> */}

              </div>
              <TreeMenu></TreeMenu>
            </ul>
          </nav>


        </div>
        <div style={sidebar ? { marginLeft: '500px' } : {}}>
          <Edit></Edit>

        </div>


      </IconContext.Provider>
    </>
  );
}

export default Navbar;