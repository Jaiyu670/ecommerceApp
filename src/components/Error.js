import React from "react"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./error.css";

function Error(){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/home");
      }
    
      function handleClick1(){
        navigate("/");
      }

    return(<div className="container12">
    <br/>
    <br/>
    <h1>SORRY ERROR OCURRED !!!!!</h1>
    <div className="buttons">
    <Button onClick = {handleClick} variant="primary" type="submit">
          Redirect to Home Page....
        </Button>
        <Button onClick = {handleClick1} variant="primary" type="submit">
          Logout
        </Button>
    </div>
    
    
    
    
    
    
    
    
    </div>)
    
}

export default Error