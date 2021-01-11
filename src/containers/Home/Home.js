import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import RoomsList from '../../components/RoomsList/RoomsList'
import { useDispatch, useSelector } from 'react-redux'
import {  getInitData, isUserLoggedIn } from '../../action/actions'


const Home = () => {
    const rooms = useSelector(state => state.auth.user.rooms);
    const roomsList = useSelector(state => state.roomDetails.roomDetails);
    const globalRoomsList = useSelector(state => state.roomDetails.globalrooms);
    const dispatch = useDispatch();
    console.log(roomsList);
    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <h1 className="heading__Primary">Smooky Chat Rooms</h1>
                </div>
                <div className="">
                    <RoomsList rooms={rooms} roomList={roomsList} add={true} userRoom={true}/>
                </div>
                <div className="">
                    <RoomsList roomList={globalRoomsList}/>
                </div>
            </div>
        </Layout>
    )
}



export default Home
