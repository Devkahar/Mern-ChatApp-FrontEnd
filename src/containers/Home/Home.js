import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import RoomsList from '../../components/RoomsList/RoomsList'
import { useSelector } from 'react-redux'

const Home = () => {
    const auth = useSelector(state => state.auth);
    console.log(auth);
    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <h1 className="heading__Primary">Smooky Chat Rooms</h1>
                </div>
                <div className="">
                    <RoomsList rooms={auth.user.rooms}/>
                </div>
            </div>
        </Layout>
    )
}



export default Home
