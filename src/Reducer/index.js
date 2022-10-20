import {
    GET_ALL_DAYS,
    GET_DAY_BY_ID,
  } from  "../Actions/constants.js";


const initialState = {
    allDays:{}
}



export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_DAYS:
            return {
                ...state,
                allDays: action.payload
            }
     
        default:
            return state;
    }
}



