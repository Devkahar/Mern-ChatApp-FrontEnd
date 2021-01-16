import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import "./SideBar.css"
import { Link, NavLink } from 'react-router-dom';
import { getRoomList } from '../../action/actions';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const SideBar = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const rooms = useSelector(state => state.init.rooms)
    const roomsList = useSelector(state => state.roomDetails.roomDetails)
    useEffect(()=>{
        console.log("Component render")
        //setRoom(rooms)
        if(rooms){
            dispatch(getRoomList(rooms));
        }
        
    },[rooms]);
    console.log(roomsList);
    return (
            
            <List className={`${classes.root} list`}>
                {roomsList.map((room =>(
                    <>
                    <ListItem alignItems="flex-start" className="listitem" key={room.roomId}>
                    <NavLink to={`/chat/${room.roomId}`}>
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        className="itemText"
                        primary={room.roomName}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Name
                            </Typography>
                            {`: last Message`}
                            </React.Fragment>
                        }
                        />
                    </NavLink>
                </ListItem>
                <Divider variant="inset" component="li" />
                </>
                )))}
                
                
            </List>
    )
}

export default SideBar
