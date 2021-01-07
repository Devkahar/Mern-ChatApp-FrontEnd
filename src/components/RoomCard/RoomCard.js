import React, { useState } from 'react'
import "./RoomCard.css"
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { registerRoom } from '../../action/room.action';
import {useDispatch} from 'react-redux'
const RoomCard = (props) => {
    const [open, setOpen] = useState(false);
    const [roomId,setRoomId] = useState('');
    const [roomName,setRoomName] = useState('');
    const [roomPassword,setRoomPassword] = useState('');
    const dispatch = useDispatch();
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
    return (
        <>
        <Modal heading={'Register Room'} 
        open={open} 
        onClose={handleClose} 
        name={roomName}
        id={roomId}
        pass={roomPassword}
        onIdChange = {e => setRoomId(e.target.value)}
        onNameChange = {e => setRoomName(e.target.value)}
        onPasswordChange = {e => setRoomPassword(e.target.value)}
        onSubmit={registerRoomHandler}

        />
        <div className="card">
        <div className="RoomCard">
            {props.add? 
            <>
                <h1>Create Room</h1>
                <div className="addIcon" onClick={()=> setOpen(true)}>
                    <AddIcon />
                </div>
            </>:
            <>
                <h1>{props.roomName}</h1>
                <div className="roomDetails">
                    <span><strong>Admin:</strong>  {props.author}</span>     
                    <span><strong>Member:</strong>  {props.members}</span>     
                    
                </div>
                <Link className="join__button" to={`/chat/${props.roomId}`} >
                    <TelegramIcon/> Join
                </Link>
            </>}
            
        </div>
        </div>
        </>
    )
}

export default RoomCard
