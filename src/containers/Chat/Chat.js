import { Avatar, Button, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar';
import Layout from '../../components/Layout/Layout'
import "./Chat.css"
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../action/actions';
import { Route, Router } from 'react-router-dom';
import MessageBox from '../../components/MessageBox/MessageBox';
const processMessage = (payload)=>{
    try {
        return JSON.parse(payload);
    } catch (error) {
        return null;
    }
    
}
const Chat = () => {

    const dispatch = useDispatch();
    const rooms = useSelector(state => state.init.rooms)
    const roomsList = useSelector(state => state.roomDetails.roomDetails)
    useEffect(()=>{
        if(rooms){
            dispatch(getRoomList(rooms));
        }
    },[rooms]);
    console.log(rooms);
    const sendMessage = ()=>{
        // ID :- 5ff1d964fc961e59407c820e
    }
    return (
        <Layout>
            <div className="chat-box">
                <div className="chat">
                <SideBar roomsList={roomsList}/>
                <Route path="/chat/:id/:password" component={MessageBox} />
                </div>
            </div>
           
        </Layout>
    )
}

export default Chat
