import {
    GET_ALL_DAYS,
    GET_DAY_BY_ID,
    FILTER_BY_MONTH
  } from  "../Actions/constants.js";


const initialState = {
    allDays:[],
    filterByMount: [],
    dayDetail:{}

}



export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_DAYS:
            console.log(action.payload)
            console.log(action.payload2)
            return {
                ...state,
                allDays: action.payload,
                // filterByMount: state.allDays.filter((d)=> {
                //     return (d.month === action.payload2)
                //  })
            }
        case FILTER_BY_MONTH:
            const filtrado = state.allDays.filter((d)=> {
                return (d.month === action.payload)
             })
            console.log(filtrado)
            console.log(action.payload)
            return{
               ...state,
               filterByMount: state.allDays.filter((d)=> {
               return (d.month === action.payload)
            })
            }
        case GET_DAY_BY_ID:
            console.log(action.payload)
            return{
                ...state,
                dayDetail: action.payload
            }
        default:
            return state;
    }
}



