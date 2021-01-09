import { messagesConstanst } from "../action/constants"

const initState ={
    messages:[]    
}

export default (state = initState,action) =>{
    switch(action.type){
        case messagesConstanst.GET_MESSAGES_SUCCESS:
            return state={
                ...state,
                messages: action.payload.messages
            }
    }
    return state;
}