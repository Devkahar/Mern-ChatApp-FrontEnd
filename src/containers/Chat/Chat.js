import { Avatar, Button, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar';
import Layout from '../../components/Layout/Layout'
import "./Chat.css"
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../action/actions';
import { Route, Router } from 'react-router-dom';
import MessageBox from '../../components/MessageBox/MessageBox';
import { getMessageBox } from '../../action/messages.action';
import Pusher from 'pusher-js';
const processMessage = (payload)=>{
    try {
        return JSON.parse(payload);
    } catch (error) {
        return null;
    }
    
}

const Chat = (props) => {

    const dispatch = useDispatch();
    const [roomId,setRoomId] = useState('');
    useEffect(()=>{
        setRoomId(props.match.params.id);
        console.log("component Get Update");
        
    },[props.match])
    return (
        <Layout>
            <div className="chat-box">
                <div className="chat">
                <SideBar />
                <MessageBox roomId={roomId}/>
                </div>
            </div>
        </Layout>
    )
}

export default Chat
