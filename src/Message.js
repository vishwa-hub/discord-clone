import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Message.css'

const Message = ({ timestamp, user , message}) => {
    // const user = useSelector(selectUser)
    return (
        <div className='message'>
            <Avatar src={user.photo}/>
            <div className="message__info">
                <h4>vishwa <span className="message__timestamp">
                    {new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
