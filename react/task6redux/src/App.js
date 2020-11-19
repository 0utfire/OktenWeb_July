import './App.css';
import {connect} from "react-redux";
import React from "react";


function App({products,cart}) {
  const handleItemClick = (item) => {
    console.log(cart);
    if (cart.find(el => el.id === item.id)) {
      removeItemFromCart(item)
    } else {
      addItemToCart(item)
    }
  }

  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>
      <ul>
        {products.map(product => (
            <li key={product.id} onClick={() => handleItemClick(product)}>
              {product.name} - {product.price}
            </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const addItemToCart = (item) => {
  return {
    type: 'Add_To_Cart',
    payload: item
  }
}
const removeItemFromCart = (item) => {
  return {
    type: 'Remove_From_Cart',
    payload: item
  }
}

export default connect(mapStateToProps, {
  addItemToCart,
  removeItemFromCart
})(App)
