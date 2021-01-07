import { userConstants } from "../action/constants"

const initialData ={
    rooms: [],
    loading: false,
    error : null,
}

export default (state= initialData,action)=>{
    console.log(action);
    switch(action.type){
        case userConstants.GET_INIT_DATA_REQUEST:
            return state = {
                ...state,
                loading: true,
            }
        case userConstants.GET_INIT_DATA_SUCCESS:
            return state = {
                ...state,
                loading: false,
                rooms: action.payload.rooms,

            }
        case userConstants.GET_INIT_DATA_FAILURE:
            return state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
    }
    return state;
}