import {
    GET_ALL_DAYS,
    GET_DAY_BY_ID,
    FILTER_BY_MONTH
  } from  "../Actions/constants.js";


const initialState = {
    allDays:[],
    filterByMount: [],

}



export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_DAYS:
            // console.log(action.payload)
            return {
                ...state,
                allDays: action.payload
            }
        case FILTER_BY_MONTH:
            const algo = state.allDays.filter(d => d.month === action.payload)
            console.log(algo)
            return{
               ...state,
               filterByMount: state.allDays.filter((d)=> {
               return (d.month === action.payload)
            })
            }
        default:
            return state;
    }
}



