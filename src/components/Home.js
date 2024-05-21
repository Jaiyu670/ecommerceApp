import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";
import {Button} from "react-bootstrap";

const Home = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  

  function handleClick(){
    navigate("/");
  }

  function handleClick1(){
    navigate("/cart");
  }


  

   





  return (
    <div className="container">
      <h2>WELCOME !!!! The Products available are listed below : </h2>
      <label>Search By Product Name : </label>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
              <h5 className="card-title">ID : {product.id}</h5>
                <h4 className="card-title">TITLE : {product.title}</h4>
                <p className="card-text">PRICE($) : {product.price}</p>
                <p className="card-text">DESCRIPTION : {product.description}</p>
                <p className="card-text">CATEGORY : {product.category}</p>
                <p className="card-text">RATING (Out of 5) : {product.rating.rate}</p>
                {/* <button className="btn btn-primary"><Link to = "/cart">🛒Add to Cart🛒</Link></button> */}
                {/* <button className="btn btn-primary" onClick={() => "addToCart"}>Add to Cart</button> */}
                {/* <button className="btn btn-primary" onClick={handleClick2}>Add to Cart</button> */}
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>

                <br/>
                <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr/>
      <br/>
      <br/>
      <Button onClick = {handleClick1} variant="info" type = "submit">GO TO Cart🛒</Button>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick = {handleClick} variant="primary" type="submit">
          Logout
        </Button>
        <br/>
        <br/>



      
      


    </div>
  );
};

export default Home;








//<button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>

  

      

    




































































