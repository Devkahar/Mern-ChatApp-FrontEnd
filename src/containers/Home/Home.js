import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import RoomsList from '../../components/RoomsList/RoomsList'

import RoomCard from '../../components/RoomCard/RoomCard'


const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <h1 className="heading__Primary">Smooky Chat Rooms</h1>
                </div>
                <div className="">
                    <RoomCard add={true} userRoom={true}/>
                    <RoomCard add={false} userRoom={true}/>
                    <RoomCard goTo={true}/>
                </div>
            </div>
        </Layout>
    )
}



export default Home
