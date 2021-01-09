import React, { useEffect, useState } from 'react'
import { Button, Input } from "@material-ui/core"
import "./MessageBox.css"
import { useDispatch, useSelector } from 'react-redux';
import { getMessageBox,postMessage } from '../../action/messages.action';
import Pusher from 'pusher-js';
const MessageBox = ({roomId}) => {
    const [message,setMessage] = useState('');
    const auth = useSelector(state => state.auth.user)
    const messages = useSelector(state => state.messages.messages)

    const name = `${auth.firstName} ${auth.lastName}`;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMessageBox({roomId}));
        console.log("get Message");
        
    },[roomId])
    useEffect(()=>{
        const pusher = new Pusher('9b822891a5982d38f046', {
            cluster: 'ap2'
        });
        const channel = pusher.subscribe(`message-${roomId}`);

        channel.bind('inserted', (data) => {
            if(data.roomId === roomId){
                dispatch(getMessageBox({roomId}))
            }
        })
        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
        }
    },[messages]);
    const changeMessageHandler = ()=>{
        dispatch(postMessage({roomId,name,message}));
        setMessage('');
    }

    return (
        <div className="MessageBox">
            <div className="displayMessages">
                {messages?.map(e =>(
                    <div className={`message ${e.author === auth._id && 'user'}`} key={e._id}>
                        <p>{e.author === auth._id? 'you':e.name}</p>
                        <h4>{e.message}</h4>
                    </div>
                ))}
            </div>
            <div className="messageInput">
                <Input value={message} onChange={e => setMessage(e.target.value)} />
                <Button onClick={changeMessageHandler}>Send</Button>
            </div>
        </div>
    )
}

export default MessageBox
