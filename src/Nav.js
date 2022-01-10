import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './nav.css'
function Nav() {
const [show, handleShow]=useState(false);
const navigate= useNavigate();

const transitionNavBar =()=>{
    if(window.scrollY>100){
        handleShow(true);
    }else{
        handleShow(false);
    }
}

useEffect(() => {
   window.addEventListener("scroll" , transitionNavBar);
   return()=>window.removeEventListener("scroll", transitionNavBar)
   
}, [])

    return (
        <div className={`nav ${show && 'nav_black'} `}>
        <div className="nav_contents">
            <img src="https://fox2now.com/wp-content/uploads/sites/14/2014/10/netflix_logo_digitalvideo.png?strip=1" className='nav_logo ' alt="" onClick={()=>navigate('/')} />

            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" onClick={()=>navigate('/profile')}/>
        </div>
            
        </div>
    )
}

export default Nav
