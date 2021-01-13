import React, { useEffect } from 'react'
import "./Rooms.css"
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalRooms } from '../../action/actions';
import RoomsList from '../../components/RoomsList/RoomsList';
import Layout from '../../components/Layout/Layout';
const Rooms = () => {
    const globalRoomsList = useSelector(state => state.roomDetails.globalrooms);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGlobalRooms());
    },[globalRoomsList]);
    return (
        <Layout>
            <h1>Global Rooms</h1>
            <RoomsList roomList={globalRoomsList}/>
        </Layout>
    )
}

export default Rooms
