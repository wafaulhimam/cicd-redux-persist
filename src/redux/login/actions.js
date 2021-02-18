import axios from 'axios';
import jwt_decode from "jwt-decode";
import { LOG_IN } from "./actionTypes"

export const login = (payload) => {
    return {
        type: LOG_IN,
        payload
    }
}

export const postLogin = body => dispatch => {
    axios
    .post('https://lekturapp.herokuapp.com/api/users/login', body)
    .then(res => {
        console.log('res =>', res);
        const decoded = jwt_decode(res.data.token);
        dispatch({ type: LOG_IN, payload: decoded});
    })
    .catch(err => {
        console.log(err)
    })


}