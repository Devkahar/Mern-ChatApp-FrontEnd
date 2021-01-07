import {combineReducers} from 'redux';

import authReducer from "./auth.reducer"
import roomDetails from './roomList.reducer'
const rootReducer = combineReducers({
    auth: authReducer,
    roomDetails,
})

export default rootReducer