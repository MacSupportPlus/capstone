import {ADD_TO_CART} from './actionTypes';
import axios from 'axios';

export const addToCart = (course) => {
    
    return {
        type: ADD_TO_CART,
        product: course
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