import axios from "axios";
import {
    GET_ALL_DAYS,
    GET_DAY_BY_ID,
    FILTER_BY_MONTH
  } from  "./constants.js";

const API = process.env.REACT_APP_API

export function getAllDays(){
    return async (dispatch) => {
        try{
            const res = await axios.get(API + '/');
            dispatch({ type: GET_ALL_DAYS, payload: res.data });
        }catch(error){
        // return dispatch({ type: SET_ERROR_TRUE });
        console.log(error)
        }

    }
}

export function getDayById(id){
    return async (dispatch) => {
        try {
            const res = await axios.get(API + `/${id}`)
            dispatch({ type: GET_DAY_BY_ID, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterByMonth(month){
    return ({type: FILTER_BY_MONTH, payload: month})
}


