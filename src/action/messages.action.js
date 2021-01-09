import axios from "../helper/axios"
import { messagesConstanst } from "./constants";


const getMessageBox = ({roomId})=>{
    return async dispatch =>{
        try {
            if(roomId){
                const res = await axios.get(`/message/${roomId}`,{roomId});
                if(res.status === 200){
                    dispatch({type: messagesConstanst.GET_MESSAGES_SUCCESS, payload: res.data});
                }else{
                    dispatch({type: messagesConstanst.GET_MESSAGES_FAILURE, payload: res.error});
                }
            }
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

export const postMessage = ({roomId,name,message})=>{
    return async dispatch =>{
        try {
            const res = await axios.post(`/message/${roomId}`,{name,message});
            if(res.status === 201){
            }else{
                dispatch({type: messagesConstanst.GET_MESSAGES_FAILURE, payload: res.error});
            }
        } catch (error) {
            console.log(error);
        }
        
    }
}


export {
    getMessageBox
}