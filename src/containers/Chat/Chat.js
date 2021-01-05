import { Avatar, Button, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

const processMessage = (payload)=>{
    try {
        return JSON.parse(payload);
    } catch (error) {
        return null;
    }
    
}
const Chat = () => {
    const [chatMessage,setChatMessage] = useState('');
    const [wsRef,setWsRef] = useState(null);
    const [chatMessages,setChatMessages] = useState([]); 
    useEffect(()=>{
        
        
    },[])
    const sendMessage = ()=>{
        // ID :- 5ff1d964fc961e59407c820e
    }
    return (
        <div>
            <h1>Chat Page</h1>
            <div className="chat-box">
                {chatMessages.map((message,index)=>
                    <ListItem alignItems="flex-start" key={index}>
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="" />
                        </ListItemAvatar>
                        <ListItemText
                        primary={message.user}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={'inline'}
                                color="textPrimary"
                            > 
                                {message.message}
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    
                )}
                {/* 5ff1d964fc961e59407c820e */}
                {/* <div>
                        <div className="author">{message.user}</div>
                        <div className="message">{message.message}</div>
                    </div> */}
            </div>
            <TextField value={chatMessage} 
            variant="outlined" 
            color="primary" 
            onChange={e => setChatMessage(e.target.value)}
            />
            <Button variant="outlined" color={'primary'} onClick={sendMessage}>send Message</Button>
        </div>
    )
}

export default Chat
