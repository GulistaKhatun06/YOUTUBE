import React from 'react'
import './Navbar.css'
import meun_icon from '../../assets/assets/menu.png'
import logo from  '../../assets/assets/logo.png'
import serach_icon from  '../../assets/assets/search.png'
import upload_icon from  '../../assets/assets/upload.png'
import more_icon from  '../../assets/assets/more.png'
import notification_icon from  '../../assets/assets/notification.png'
import profile_icon from  '../../assets/assets/jack.png'
import {Link} from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
    <div className ="nav-left flex-div">  
    <img  className="menu_icon" onClick={()=> setSidebar(prev=>prev===false?true:false)} src={meun_icon} alt=""/>
   <Link to ='/'> <img  className="logo" src={logo} alt=""/></Link>
    </div>
     <div className ="nav-middle flex-div">
     <div className="search-box flex-div">
      <input type="text" placeholder='Search'/>
      <img src= {serach_icon} alt=""/>
     </div>
     </div>
   <div className ="nav-right flex-div">
    <img src={upload_icon}  alt=""/>
     <img src={more_icon}  alt=""/>
     <img src={notification_icon}  alt=""/>
    <img className="user-icon" src={ profile_icon}  alt=""/>
   </div>
      
    </nav>
  )
}

export default Navbar