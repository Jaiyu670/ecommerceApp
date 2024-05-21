import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Error from './components/Error';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //New code

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  setCartItems([...cartItems, product]);
   };

  

   const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(product => product.id !== productId));
  };

  

  



   const onCheckout = () => {
  alert('Payment successful!');
   setCartItems([]);
   };

  const onLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    

    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path='/' element = {<Login onLogin={onLogin} />} />

      <Route exact path='/home' element = {<Home addToCart={addToCart} />} />
      <Route exact path='/cart' element = {<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route exact path='/checkout' element = {isAuthenticated ? (<Checkout cartItems={cartItems} onCheckout={onCheckout} />
           ) : (
           <Navigate replace to ="/login" />
            )} />
      <Route exact path='*' element = {<Error  />} />


    </Routes>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>
  );
};

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
// import Header from "./components/Header.js"
// import Home from "./components/Home.js"
// import Cart from "./components/Cart.js"
// import Checkout from "./components/Checkout.js"
// import Login from "./components/Login.js"

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(product => product.id !== productId));
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" exact>
//           <Home addToCart={addToCart} />
//         </Route>
//         <Route path="/cart">
//           <Cart cart={cart} removeFromCart={removeFromCart} />
//         </Route>
//         <Route path="/checkout" component={Checkout} />
//         <Route path="/login" component={Login} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







