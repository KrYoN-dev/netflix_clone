import React, { useRef } from 'react';
import { auth } from '../FireBase';

import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";

import './SignInScreen.css'

function SignInScreen() {
const emailRef = useRef(null);
const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();

       createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value
        ).then((authUser)=>{
            console.log("createEmail",authUser);
        })
        .catch((error)=>{
            alert(error.message);
        });
    }

    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                console.log("signinEmail ",authUser);
            })
            .catch((error)=>{
                alert(error.message);
            });
    }
    return (
        <div className='signinScreen'> 
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4><span className='signinScreen_grey'> New to Netflix?</span> 
            <span className='signinScreen_link' onClick={register}> Sign Up now.</span>
            </h4>

        </form>
            
        </div>
    )
}

export default SignInScreen;


