import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {HashRouter, Routes, Route} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import { auth } from './FireBase';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './Screens/ProfileScreen';

function App() {

  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,userAuth =>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        
        }))
      }else{
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;

  },[dispatch])
  
  return (
    <div className="App">
       <HashRouter>
        
      {!user ?(<LoginScreen/>) : ( 
        <Routes>
       
        
        <Route path="/profile" element={<ProfileScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>}></Route>

        </Routes>
        
        )}
        
    
  </HashRouter>

    </div>
  );
}

export default App;


