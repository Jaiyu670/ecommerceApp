

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Cart = ({ cartItems, removeFromCart }) => {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/home");
  }

  function handleClick1(){
    navigate("/checkout");
  }


  
  return (
    <div className="container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((product, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <p className="card-text">{product.id}</p>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <br/>
          <br/>
          <Button onClick = {handleClick1} variant='success' type = "submit">💳💳 Make Payment 💳💳</Button>

        </div>
        
      )}

            <br/>
            <br/>
            <Button onClick = {handleClick} variant="primary" type="submit">Redirect to Home</Button>


    </div>
  );
};

export default Cart;

