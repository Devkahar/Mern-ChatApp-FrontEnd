import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Home = () => {
    
    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <h1 className="heading__Primary">Smooky Chat Rooms</h1>
                </div>
            </div>
        </Layout>
    )
}



export default Home
