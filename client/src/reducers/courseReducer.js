import {ADD_TO_CART} from '../actions/actionTypes';

const courseReducer = (state, action) => {
  if (state == null) {
    state = {
        cart: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00),
        courses: [],
        udemyCourses: []
    };
  }

  switch (action.type) { 

    case "ADD_TO_CART":

        return{
            ...state,
            cart: action.product
        }
    
    case "GET_VIDEOS":

        return{
            ...state,
            courses: action.data
        }

        

  
    case "GET_UDEMY_VIDEOS":

        return{
            ...state,
            udemyCourses: action.data
        }
    default:
        return state;
        
        

  }
};

export default courseReducer