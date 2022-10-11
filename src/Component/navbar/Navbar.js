import React from 'react'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import './navbar.css'

function Navbar() {
  return (

    <div className='navbar' >
    <div className='navbar_container'>

        <div className='left_side'>
            <span className='admin' >  Murali Admin </span>
        </div>

        <div className='right_side'> 

           <div className='nav_icon'>

           <NotificationsNone className='icon'/>
           <span className='IconBadge'>2</span>

           </div>
            

            <div className='nav_icon' >
              <Language className='icon' />
            </div>
           
            <div className='nav_icon'>
              <Settings className='icon' />
            </div>

            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
    
        </div>
    </div>
    </div>
  )
}

export default Navbar