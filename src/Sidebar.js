import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Add, Call, Headset, InfoOutlined, Mic, Settings } from '@material-ui/icons';
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels,setChannels] = useState([])

    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                data: doc.data()
            })))
        })
    },[])

    const handleAddChannel = ()=>{
        const channelName = prompt('enter the new channel name')
        if(channelName){
            db.collection('channels').add({
                channelName : channelName
            })
        }
    }
    console.log(channels);
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h1>vishwa</h1>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text channel</h4>
                    </div>
                    <Add onClick={handleAddChannel} className='sidebar__addChannels'/>
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({id ,data})=>(
                        <SidebarChannel key={id} id ={id} channelName = {data.channelName} />
                    ))}
                    
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
                <div className="sidebar__voiceInfo">
                    <h3>voiceConnected</h3>
                    <p>stream</p>
                </div>
                <div className="sidebar__voiceIcon">
                    <InfoOutlined/>
                    <Call/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <Mic/>
                    <Headset/>
                    <Settings/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
