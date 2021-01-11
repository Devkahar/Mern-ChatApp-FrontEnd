import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../action/actions';
import RoomCard from '../RoomCard/RoomCard';
import "./RoomsList.css";

const RoomsList = (props) => {
    const dispatch = useDispatch();
    const [roomsList,setRoomsList] = useState([]);
    useEffect(()=>{
        if(props.rooms){
            dispatch(getRoomList(props.rooms));
        }
    },[props.rooms]);


    useEffect(()=>{
        setRoomsList(props.roomList)
    },[props.roomList])
    console.log(props.rooms);
    return (
        <div className="roomList">
            <RoomCard add={props.add} userRoom={props.userRoom}/>
            {roomsList?.map(e =><RoomCard
            userRoom={props.userRoom}
            key={e.roomId}
            roomName={e.roomName}
            author={`${e?.author?.firstName} ${e?.author?.lastName}`}
            members = {e.participants.length}
            roomId={e.roomId}
            />)}
        </div>
    )
}

export default RoomsList
