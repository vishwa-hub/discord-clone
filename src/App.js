import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          dispatch(login({
            uid : authUser.uid,
            photo: authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName
          }))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])
  console.log(user)
  return (
    <div className="app">
      {
        user?(
          <>
            <Sidebar/>
            <Chat/>
          </>
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
