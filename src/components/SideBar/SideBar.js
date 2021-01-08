import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import "./SideBar.css"
import { Link, NavLink } from 'react-router-dom';
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
    const classes = useStyles();
    
    console.log(props.roomsList);
    return (
        <div>
            
            <List className={`${classes.root} list`}>
                {props.roomsList.map((room =>(
                
                    <ListItem alignItems="flex-start" className="listitem" key={room.roomId}>
                    <NavLink to={`/chat/${room.roomId}/${room.password}`}>
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
                )))}
                <Divider variant="inset" component="li" />
                
                
            </List>
        </div>
    )
}

export default SideBar
