import { roomConstants } from "./constants"
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