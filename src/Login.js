import { Button } from '@material-ui/core'
import { AudiotrackSharp } from '@material-ui/icons'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

const Login = () => {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png" alt=""/>
            </div>
            <Button onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login
