
import courseReducer from './courseReducer';
import authReducer from './reducer'



import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import directoryReducer from './directory/directory.reducer';
// import shopReducer from './shop/shop.reducer';
import cartReducer from '../redux/cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    // user: userReducer,
    cart: cartReducer,
    // directory: directoryReducer,
    // shop : shopReducer,
    auth: authReducer,
    course: courseReducer

})

export default persistReducer(persistConfig, rootReducer);