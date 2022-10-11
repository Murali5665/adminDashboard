import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import{ Link } from 'react-router-dom'
import './user.css'

export default function user() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h3 className="userTitle"> Edit user</h3>
            <Link to='/newuser' className="link"> <button className="userAddButton"> Create </button> </Link>
            
        </div>

        <div className="userContainer">
            <div className="userShow"> 
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" /> 
                    <div className="userShowTopTitle">
                        <span className="userShowUsername"> Anna Backer </span>
                        <span className="userShowUserTitle"> Software Enginerr </span>
                    </div>
                </div>

                <div className="userShowBottom">
                    <span className="userShowUserTitle" > Account Details </span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle"> annabeck99 </span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10-10-2022</span>
                    </div>

                    <span> Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle"> +919000000000</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle"> annabeck99@gmail.com </span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle"> Hyderabad | india</span>
                    </div>
                </div>
            </div>

            <div className="userUpdate">
                <h3> Edit </h3>
                <form className="userUpdateForm">

                    <div className="userUpdateLeft">
                        <div className="userUpdateItem"> 
                            <label htmlFor='username' > Username </label>
                            <input id="username"  className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem"> 
                            <label htmlFor='fullname' > Full Name </label>
                            <input id="fullname"  className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem"> 
                            <label htmlFor='email' > Email </label>
                            <input type="email" id="email"   className="userUpdateInput"/>
                        </div> 

                        <div className="userUpdateItem"> 
                            <label htmlFor='phone' > Phone </label>
                            <input id="phone"  className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem"> 
                            <label htmlFor='address' > Address </label>
                            <input id="address"  className="userUpdateInput" />
                        </div>
                    </div>

                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                            <label htmlFor='file' > <Publish className="userUpdateIcon" /> </label>
                            <input type="file" id="file" style={{display: 'none'}} />
                        </div>
                        <button className="userUpdateButton"> Update </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}
