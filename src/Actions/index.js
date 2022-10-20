import axios from "axios";
import {
    GET_ALL_DAYS,
    GET_DAY_BY_ID,
  } from  "./constants.js";

const API = process.env.REACT_APP_API

export function getAllDays(){
    return async (dispatch) => {
        try{
            const res = await axios.get(API + '/all');
            dispatch({ type: GET_ALL_DAYS, payload: res.data });
        }catch(error){
        // return dispatch({ type: SET_ERROR_TRUE });
        console.log(error)
        }

    }
}