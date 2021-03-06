import { roomConstants } from "../action/constants"

const initData = {
    roomDetails: [],
    globalrooms: [],
    loading: false,
}

export default (state =initData,action) => {
    switch(action.type){
        case roomConstants.GET_ROOM_DETAILS_REQUEST:
            return state ={
                ...state,
                loading: true
            }
        case roomConstants.GET_ROOM_DETAILS_SUCCESS:
            return state = {
                ...state,
                loading: false,
                roomDetails: action.payload.roomDetails
            }
        case roomConstants.GET_ROOM_DETAILS_FAILURE:
            return state = {
                ...state,
                loading: true
            }
        case roomConstants.GET_GLOBAL_ROOMS_REQUEST:
            return state ={
                ...state,
                loading: true
            }
        case roomConstants.GET_GLOBAL_ROOMS_SUCCESS:
            return state = {
                ...state,
                loading: false,
                globalrooms: action.payload.roomDetails
            }
        case roomConstants.GET_GLOBAL_ROOMS_FAILURE:
            return state = {
                ...state,
                loading: true
            }
    }
    return state;

}