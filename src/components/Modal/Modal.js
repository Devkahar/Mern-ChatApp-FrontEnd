import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Input, TextField } from '@material-ui/core';
import "./Modal.css"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.heading}</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <div className="modal__desc">
                {props.inputs?.map(e => (
                  <TextField type={e.type} key={e.label} value={props[e.value]} id="outlined-basic" label={e.label} variant="outlined" onChange={props[e.onChange]} />
                ))}
                {/* <TextField value={props.name} id="outlined-basic" label="Room Name" variant="outlined" onChange={props.onNameChange} />
                <TextField  value={props.id} id="outlined-basic" label="Room Id" variant="outlined" 
                    onChange={props.onIdChange}
                    placeholder="Enter uniqueId"
                />
                <TextField value={props.pass}  id="outlined-basic" label="Room Password" variant="outlined" 
                    onChange={props.onPasswordChange}
                /> */}
            </div>
            <div className="buttons">
            <Button onClick={props.onClose} variant='contained' color='secondary'>Close</Button>
            <Button onClick={props.onSubmit} variant='contained' color='primary'>Submit</Button>
            </div>
          </div>
        </Fade>
      </Modal>
  );
}