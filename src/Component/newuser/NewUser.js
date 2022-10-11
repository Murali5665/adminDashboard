import React from 'react'
import './newuser.css'

export default function NewUser() {
  return (
    <div className='newuser'>
        <h1 className="newUserTitle"> New User</h1>

        <form className="newUserForm">

            <div className="newUserItem">
                <label htmlFor='username' > Username </label>
                <input id="username" />
            </div>

            <div className="newUserItem">
                <label htmlFor='fullname' > Fullname </label>
                <input id="fullname" />
            </div>

            <div className="newUserItem">
                <label htmlFor='email' > Email </label>
                <input id="email" />
            </div>

            <div className="newUserItem">
                <label htmlFor='password' > Password </label>
                <input id="password" />
            </div>

            <div className="newUserItem">
                <label htmlFor='phone' > Phone </label>
                <input id="phone" />
            </div>

            <div className="newUserItem">
                <label htmlFor='address' > Address </label>
                <input id="address" />
            </div>

            <div className="newUserItem">
                <label  > Gender </label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label htmlFor='male' > Male </label>

                    <input type="radio" name="gender" id="female" value="female"/>
                    <label htmlFor='female' > Female </label>

                    <input type="radio" name="gender" id="male" value="other"/>
                    <label htmlFor='other' > Other </label>
                </div>
            </div>


            <div className="newUserItem">
                <label  > Active </label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes" > Yes </option>
                    <option value="no"> No </option>
                </select>
            </div>

            <button className='newUserButton'> Create </button>
        </form>
    </div>
  )
}
