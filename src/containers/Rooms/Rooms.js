import React, { useEffect, useState } from 'react'
import "./Rooms.css"
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalRooms } from '../../action/actions';
import RoomsList from '../../components/RoomsList/RoomsList';
import Layout from '../../components/Layout/Layout';
import SnackBar from '../../components/UI/SnackBar';
const Rooms = () => {
    const globalRoomsList = useSelector(state => state.roomDetails.globalrooms);
    const dispatch = useDispatch();
    const [message,setMessage] = useState('');
    const [severity,setSeverity] = useState('');
    useEffect(()=>{
        dispatch(getGlobalRooms());
    },[]);
    const [open, setOpen] = useState(false);
    const handleClick = (e) => {
        setMessage(e.message);
        setSeverity(e.severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    return (
        <Layout>
            <SnackBar open={open} 
            handleClose={handleClose}
             message={message}
             severity={severity}
             />
            <h1>Global Rooms</h1>
            <RoomsList roomList={globalRoomsList} handleClick={handleClick} />
        </Layout>
    )
}

export default Rooms
