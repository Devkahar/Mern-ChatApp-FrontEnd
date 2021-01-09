import {combineReducers} from 'redux';

import authReducer from "./auth.reducer"
import roomDetails from './roomList.reducer'
import initData from './initData';
import messages from "./messages.reducer";
const rootReducer = combineReducers({
    auth: authReducer,
    roomDetails,
    init: initData,
    messages: messages,
})

export default rootReducer