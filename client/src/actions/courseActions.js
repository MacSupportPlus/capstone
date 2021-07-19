import {ADD_TO_CART} from './types';

export const addToCart = (course) => {
    
    return {
        type: ADD_TO_CART,
        product: course
    }
};