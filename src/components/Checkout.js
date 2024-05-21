import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./checkout.css";

const Checkout = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();

  function handleClick(){
    navigate("/home");
  }

  function handleClick1(){
    navigate("/");
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${total}</p>
      
      <Button variant="success" onClick={onCheckout}>Pay Now</Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='buttonss'>
      <Button onClick = {handleClick} variant="primary" type="submit">
          Redirect to Home Page....
        </Button>
        <Button onClick = {handleClick1} variant="primary" type="submit">
          Logout
        </Button>
        </div>
      
    </div>
  );
};

export default Checkout;
