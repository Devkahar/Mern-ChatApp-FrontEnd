import {combineReducers} from 'redux';

import authReducer from "./auth.reducer"
import roomDetails from './roomList.reducer'
import initData from './initData';
const rootReducer = combineReducers({
    auth: authReducer,
    roomDetails,
    init: initData,
})

export default rootReducer