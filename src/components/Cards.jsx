import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Travel through the Island of Bali in Provate Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="./images/img-3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./images/img-4.jpg"
              text="Travel through the Island of Bali in Provate Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="./images/img-5.jpg"
              text="Travel through the Island of Bali in Provate Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
