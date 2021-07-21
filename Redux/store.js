import {applyMiddleware, combineReducers, createStore} from 'redux'

import cartItems from './Reducers/cartItem'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    cartItems: cartItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store