import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import {useSelector} from "react-redux";
import {selectUser} from "../features/counter/userSlice";
import { signOut } from 'firebase/auth';
import { auth }  from "../FireBase"
import {Link} from "react-router-dom"
 

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen_Body">
             <h1>Edit Profile</h1>
             <div className="profileScreen_info">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                 <div className="profileScreen_details">
                     <h2>{user.email}</h2>
                     <div className="profileScreen_plans">
                     <h3>Plans</h3>
                     <div className="planscreen">
                         <p>Netflix 1080px Plan</p>
                         <Link to="/" className='planScreen_sub'>Subscribe</Link>
                     </div>
                     <div className="planscreen">
                         <p>Netflix 720px Plan</p>
                         <Link to="/" className='planScreen_sub'>Subscribe</Link>
                     </div>
                     <div className="planscreen">
                         <p>Netflix 480px Plan </p>
                         <Link to="/" className='planScreen_sub'>Subscribe</Link>
                     </div>
                         <button onClick={()=>signOut(auth)} className='profileScreen_signout'>Sign Out</button>
                     </div>
                 </div>
             </div>
        </div>
            
        </div>
    )
}

export default ProfileScreen;
