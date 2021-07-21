import {ADD_TO_CART} from '../actions/actionTypes';

const courseReducer = (state, action) => {
  if (state == null) {
    state = {
        courseItems: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00)
    };
  }

  switch (action.type) { //action.product

    case ADD_TO_CART:

        let newCourseItems = [...state.courseItems];
        let isFound = false;

        newCourseItems.forEach(course =>{
            if(course.id === action.product.id){
                course.count++;
                isFound = true;
            }
        })

        if(!isFound){
            newCourseItems.push({...action.product, count:1})
        }


        return {
            ...state,
            courseItems: newCourseItems,
            numberOfItems: state.numberOfItems + 1,
            totalCost: state.totalCost + parseFloat(action.product.price)
        }
    default:
      return state;
  }
};

export default courseReducer