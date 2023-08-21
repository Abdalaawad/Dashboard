import React from 'react'
import "./Navbar.css"
import { GiWorld} from 'react-icons/gi';
import { AiOutlineSearch} from 'react-icons/ai';
import { AiOutlineUnorderedList} from 'react-icons/ai';
import { IoMdNotificationsOutline} from 'react-icons/io';
import { BsChatLeft} from 'react-icons/bs';
import { MdOutlineDarkMode} from 'react-icons/md';
import { BiExitFullscreen} from 'react-icons/bi';
const Navbar = () => {
  return (
  <div className='app-navbar'>
  
    <div className='app-navbar-input'>
        <input type="text"  placeholder='Search' />
        <AiOutlineSearch />
    </div>
    <div className='app-navpar-content'>
     <div className='app-navbar-item'>
        <GiWorld  className='navbar-icon  world'/>
        <h3>English</h3>
        </div>
        <div className='app-navbar-item'>
        <MdOutlineDarkMode className="navbar-icon"/>
        </div>
        <div className='app-navbar-item'>
        <BiExitFullscreen className="navbar-icon" />
        </div>
        <div className='app-navbar-item'>
        <IoMdNotificationsOutline className="navbar-icon"/>
        <div className='nav-bar-notif'><span>3</span></div>
        </div>
        <div className='app-navbar-item'>
        <BsChatLeft className="navbar-icon"/>
        <div className='nav-bar-notif'><span>1</span></div>
        </div>
        <div className='app-navbar-item'>
        <AiOutlineUnorderedList className="navbar-icon"/>
        </div>
        {/* <div className='app-navbar-image'>
        <img src="" alt="" />
        </div> */}
    </div>
    </div>


  )
}

export default Navbar