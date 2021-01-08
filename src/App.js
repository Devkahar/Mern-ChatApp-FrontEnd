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
import { getInitData, isUserLoggedIn } from './action/actions';
const App = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
        if(auth.authenticate){
            dispatch(getInitData());
        }
        // const pusher = new Pusher('9b822891a5982d38f046', {
        //     cluster: 'ap2'
        //   });
        // const channel = pusher.subscribe('message');
        // channel.bind('inserted', (data) => {
        //   alert(JSON.stringify(data));
        // });
    },[auth.authenticate]);
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/chat" component={Chat}/>
        </Switch> 
    )
}

export default App
