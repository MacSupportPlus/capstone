//import {ADD_TO_CART} from '../actions/actionTypes';

const courseReducer = (state, action) => {
  if (state == null) {
    state = {
        cartItems: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00),
        courses: [],
        udemyCourses: []
    };
  }

  switch (action.type) { 

    case "ADD_TO_CART":

        let newCartItems = [...state.cartItems];
        let isFound = false;
  

        newCartItems.forEach(product =>{
            if(product.id === action.product.id){
                product.count++;
                isFound = true;
            }
        })

        if(!isFound){
            newCartItems.push({...action.product, count:1})
        }


        return {
            ...state,
            cartItems: newCartItems,
            numberOfItems: state.numberOfItems + 1,
            totalCost: state.totalCost + parseFloat(action.product.price_detail.amount)
        }
    case "REMOVE_FROM_CART":

        let removedCartItems = [...state.cartItems];
        console.log(removedCartItems)

        removedCartItems.forEach(product =>{

                product.count--;
                let array = removedCartItems.filter(product => product.id !== action.product.id)
                
                removedCartItems = array
                console.log(`newOne ${removedCartItems}`)
            
        })

        // if(!isFounded){
        //     removedCartItems.filter({...action.product, count:-1})
        // }


        return {
            ...state,
            cartItems: removedCartItems,
            numberOfItems: state.numberOfItems - 1,
            totalCost: state.totalCost - parseFloat(action.product.price)
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