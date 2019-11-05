import React from "react";
import Details from "./details";

const Cart = props => {
  return (
    <div className="cart">
      <div className="container">
        <div className="top">
          <img src={props.image}></img>
          <div className="allDetails">
            <Details
              detTitle="Date de sortie"
              answer="27 septembre 1968"
              last="(2h 21min)"
            ></Details>
            <Details detTitle="De" answer="Stanley Kubrick"></Details>
            <Details
              detTitle="Avec"
              answer="Keir Dullea,Gary Lockwood, William Sylvester"
            ></Details>
            <Details detTitle="Genre" answer="Science Fiction"></Details>
            <Details
              detTitle="Nationalité"
              answer="Américain, Britannique"
            ></Details>
          </div>
        </div>
        <h1 className="titleh1bis">{props.title}</h1>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Cart;
