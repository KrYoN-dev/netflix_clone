import React, { useState } from 'react';
import './LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signin, setSignIn]=useState(false);

    return (
        <div className='loginScreen'>
        <div className="loginScreen_background">
            <img className='loginScreen_logo' src="https://fox2now.com/wp-content/uploads/sites/14/2014/10/netflix_logo_digitalvideo.png?strip=1" alt="" />

            <button className='loginScreen_button' onClick={()=>setSignIn(true)}> Sign In</button>

            <div className="loginScreen_gradient"></div>
            <div className="loginScreen_body">
            {signin? (<SignInScreen/>):<>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at Any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen_input">
                <form>
                <input type="email"  placeholder='Email Address'/>
                <button className='loginScreen_getStarted' onClick={()=>setSignIn(true)}> GET STARTED</button>

                </form>
            </div>
            </>
            }
            </div>
        </div>
            
        </div>
        
    )
}

export default LoginScreen;
