import { roomConstants, userConstants } from "./constants"
import axios from '../helper/axios'


export const getRoomList =  (arr)=>{
    return async dispatch =>{
        try {
            dispatch({type: roomConstants.GET_ROOM_DETAILS_REQUEST});
            const res = await  axios.post('/roomList',{roomIDArray: arr})
            if(res.status===200){
                dispatch({type: roomConstants.GET_ROOM_DETAILS_SUCCESS,payload: {roomDetails:res.data.roomDetails}});
            }else{
                dispatch({type: roomConstants.GET_ROOM_DETAILS_FAILURE});
            }
        } catch (error) {
            console.log(error);
        }
        
        // const dataFetching = (e)=>{
        //     return new Promise((resolve,reject)=>{
        //         axios.post('/roomList',{
        //             roomID: e.roomID
        //         })
        //         .then(res =>  resolve(res.data))
        //         .catch(error => reject(error))
        //     })
        // }
        // const prom = [];
        // const a =  arr?.map(async e  => prom.push(await dataFetching(e)))
        // Promise.all(prom)
        // .then(res => dispatch({type: roomConstants.GET_ROOM_DETAILS_SUCCESS,payload: {roomDetails:prom}}))
        // .catch(error=> console.log(error)); 


    }
}
export const getInitData = ()=>{
    return async dispatch =>{
        try {
            dispatch({type: userConstants.GET_INIT_DATA_REQUEST});
            const res = await axios.get('/getInitData');
            if(res.status === 200){
                console.log("Init Data",res.data);
                dispatch({type: userConstants.GET_INIT_DATA_SUCCESS,payload:{rooms: res.data.rooms}});
            }else{
                dispatch({type: userConstants.GET_INIT_DATA_FAILURE,payload:{error: res.error}});
            }
        } catch (error) {
            
        }
    }
}
export const registerRoom = (payload)=>{
    return async dispatch =>{
        try {
            dispatch({type: roomConstants.REGISTER_ROOM_REQUEST});
            const res = await axios.post('/room',payload);
            if(res.status===201){
                dispatch(getInitData());
                dispatch({type: roomConstants.REGISTER_ROOM_SUCCESS,payload:{
                    rooms: res.data.rooms
                }})
                console.log(res.data);
            }else{
                dispatch({type:roomConstants.REGISTER_ROOM_FAILURE,payload:{
                    error: res.error,
                }})
            }
        } catch (error) {
            console.log(error);
        }
    }
}