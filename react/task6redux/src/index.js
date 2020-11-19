import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const InitialState = {
    products: [
        {name: 'Product1', price: 19.99, id: 1},
        {name: 'Product2', price: 1.99, id: 2},
        {name: 'Product3', price: 10.99, id: 3}
    ],
    cart: [],
    wishlist: []
}
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'Add_To_Cart': {
            const itemInCart = state.cart.find(el => el.id === action.payload.id)
            const updatedCart = [...state.cart]
            if (!itemInCart) updatedCart.push(action.payload)
            return {...state, cart: updatedCart}
        }
        case 'Remove_From_Cart': {
            return {
                ...state,
                cart: state.cart.filter(el => el.id !== action.payload.id)
            }
        }
        default:
            return state;
    }
}

const store = () => createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
