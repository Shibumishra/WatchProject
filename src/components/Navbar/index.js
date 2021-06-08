import React, { useState } from "react";

const Navbar = (props) => {
  const[showCardProduct, setShowCardProduct]=useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-4">
        <a className="navbar-brand" href="#">
          Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() =>setShowCardProduct(!showCardProduct)}>
                Cart 
                <sup>{props.cartCount}</sup>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        {showCardProduct && props.cardProdect.length && props.cardProdect.map(({name,quantity}) =>
         <div style={{color:"white"}}>
          <h1>{name}</h1>
          <h2>quantity- {quantity}</h2>
         </div>
        ) 
        }
      </nav>
    </div>
  );
};

export default Navbar;
