import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../action/actions';
import RoomCard from '../RoomCard/RoomCard';
import "./RoomsList.css";

const RoomsList = (props) => {
    const dispatch = useDispatch();
    const roomsList = useSelector(state => state.roomDetails.roomDetails)
    useEffect(()=>{
        if(props.rooms){
            dispatch(getRoomList(props.rooms));
        }
    },[props.rooms]);
    console.log(props.rooms);
    return (

        <div className="roomList">
            <RoomCard add/>
            {roomsList.map(e =><RoomCard 
            key={e._id} 
            roomName={e.roomName}
            author={`${e.author.firstName} ${e.author.lastName}`}
            members = {e.participants.length}
            roomId={e.roomId}
            />)}
        </div>
    )
}

export default RoomsList
