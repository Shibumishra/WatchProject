import React from 'react';

const Card = (props) => {
    const {name, fullImage, uniqueID, shortDescription} = props.item
    return ( <div className="card m-2" style={{width: "18rem"}} key={uniqueID}>
    <img className="card-img-top" src={fullImage} width="200" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{shortDescription}</p>
      <button className="btn btn-primary" onClick={() => {
          props.addcard(props.item)
      }}>Add To Card</button>
    </div>
  </div> );
}
 
export default Card;