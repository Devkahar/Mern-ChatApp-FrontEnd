import React, { useState } from 'react'
import "./RoomCard.css"
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { registerRoom } from '../../action/room.action';
import {useDispatch} from 'react-redux'
import axiosInstance from '../../helper/axios';
const RoomCard = (props) => {
    const [open, setOpen] = useState(false);
    const [roomId,setRoomId] = useState('');
    const [roomName,setRoomName] = useState('');
    const [roomPassword,setRoomPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const registerRoomInputs = [
        {type: 'text', label:'Room Name', placeHolder: 'Room Name', value:'name', onChange: 'onNameChange'},
        {type: 'text', label:'Room Id', placeHolder: 'Id Must be unique', value:'id', onChange: 'onIdChange'},
        {type: 'password', label:'Password', placeHolder: 'Password', value: 'pass', onChange: 'onPasswordChange'}
    ]
    const joinRoomInputs = [
        {type: 'password', label:'Password', placeHolder: 'Password', value: 'pass', onChange: 'onPasswordChange'}
    ]
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const registerRoomHandler = ()=>{
        dispatch(registerRoom({ roomName,roomId,password:roomPassword}))
        handleClose();
        setRoomId('');
        setRoomName('');
        setRoomPassword('');
    }
    const joinRoomHandler = ()=>{
        axiosInstance.post(`/joinRoom/${props.roomId}`, {password: roomPassword})
        .then(res => console.log("Join Room",res))
        .catch(error => console.log(error));
        handleClose();
        
    }
    const renderUserRooms = ()=>{
        return (props.add? 
            <>
                <h1>Create Room</h1>
                <div className="addIcon" onClick={()=> setOpen(true)}>
                    <AddIcon />
                </div>
            </>:
            <>
                <h1>Your Chat Rooms</h1>
                <div className="roomDetails">

                </div>
                <Link className="join__button" to={`/chat`} >
                    <TelegramIcon/> chat
                </Link>
            </>)

    }
    const renderGlobalRooms = ()=>{
        return (
            props.goTo ?
            <>
                <h1>Global Rooms</h1>
                <div className="roomDetails">   
                    <span>Join Friends Rooms</span>     
                </div>
                <Link className="join__button" to={'/Rooms'}>
                    <TelegramIcon /> Go
                </Link>
            </>
            :
            props.roomName &&
            <>
                <h1>{props.roomName}</h1>
                <div className="roomDetails">   
                    <span><strong>Member:</strong>  {props.members}</span>     
                </div>
                <div className="join__button" onClick={()=> setOpen(true)}>
                    <AddIcon /> JOIN
                </div>
            </>
        )
    }

    return (
        <>
        {props.add? 
        <Modal heading={'Register Room'} 
            open={open}
            onClose={handleClose}
            inputs={registerRoomInputs}
            name={roomName}
            id={roomId}
            pass={roomPassword}
            onNameChange = {e => setRoomName(e.target.value)}
            onIdChange = {e => setRoomId(e.target.value)}
            onPasswordChange = {e => setRoomPassword(e.target.value)}
            onSubmit={registerRoomHandler}
        />:
            <Modal heading={props.roomName}
                open={open}
                onClose={handleClose}
                inputs={joinRoomInputs}
                pass={roomPassword}
                onPasswordChange = {e => setRoomPassword(e.target.value)}
                onSubmit={joinRoomHandler}
            />
        }
        <div className="card">
        <div className="RoomCard">
            {props.userRoom?renderUserRooms(): renderGlobalRooms()}
        </div>
        </div>
        </>
    )
}

export default RoomCard
