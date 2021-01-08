import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import RoomsList from '../../components/RoomsList/RoomsList'
import { useSelector } from 'react-redux'

const Home = () => {
    const rooms = useSelector(state => state.init.rooms);
    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <h1 className="heading__Primary">Smooky Chat Rooms</h1>
                </div>
                <div className="">
                    <RoomsList rooms={rooms}/>
                </div>
            </div>
        </Layout>
    )
}



export default Home
