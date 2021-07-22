import {ADD_TO_CART} from './actionTypes';
import axios from 'axios';

export const addToCart = (course, token) => async dispatch => {
    
    try {
        console.log(token);
        const config = {
            method: 'PUT', 
            url: `http://localhost:8800/api/users/${course.id}/addToCart`,
            headers: { "Authorization": token }
        }
        let response = await axios(config);
        console.log(response);
        // return { 
        //     type: ADD_TO_CART,
        //     payload: response.data
        // }
    } catch(err){
        console.log(err);
    }
};

export const getVideos = (cb) => async dispatch => {

    try{
        let response = await axios.get('/videos/videos');
        
        dispatch({
            type: "GET_VIDEOS",
            data: response.data
        })
    

        cb()
    }catch(err){

    }
}
export const getUdemyVideos = (cb) => async dispatch => {

    try{
        let response = await axios.get('udemyapi/courses');
        console.log(response)
        dispatch({
            type: "GET_UDEMY_VIDEOS",
            data: response.data.result.results
        })
    

        cb()
    }catch(err){

    }
}
