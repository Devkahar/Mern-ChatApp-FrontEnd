import { authConstants } from "../action/constants"

const initialState={
    token: null,
    user:{
        firstName:'',
        lastName:'',
        email:'',
        picture:'',
        _id: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ""
}

export default (state = initialState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                authenticate: true,
                user: action.payload.user,
                token: action.payload.token,
                authenticating: false
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state={
                ...state,
                authenticate: false,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state={
                ...state,
                error: action.payload.error,
                loading: false
                
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state={
                ...initialState
            }
            break;
    }

    return state;
}