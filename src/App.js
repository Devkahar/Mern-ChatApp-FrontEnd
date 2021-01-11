import React, { useEffect } from 'react'
import {Button} from '@material-ui/core'
import { Switch,Route,Link } from  'react-router-dom'
import Home from './containers/Home/Home';
import "./App.css"
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Chat from './containers/Chat/Chat';
import Pusher from 'pusher-js';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalRooms, getInitData, isUserLoggedIn } from './action/actions';
const App = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }else{
            dispatch(getInitData())
        }
        dispatch(getGlobalRooms());
    },[auth.authenticate]);
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/chat/:id" component={Chat} />
        </Switch>
    )
}

export default App
