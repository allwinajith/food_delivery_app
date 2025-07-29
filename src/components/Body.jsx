import React, { useState } from "react";
import Card from "./Card";
import { restaurant_details } from "../utils/restro_details";
import "../styles/bodyStyles.css";

const Body = ({ searchTerm }) => {
  const [restaurantData, setRestaurantData] = useState(restaurant_details);

  if (!restaurantData?.restaurants) {
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(243 238 233 / 41%)",
        }}
      >
        Loading or no data available...
      </div>
    );
  }

  const getValue = (e) => {
    console.log(e.target.value);
  };

  const sortBy = (e) => {
    let rest = restaurantData.restaurants;
    if (e.target.value === "deliveryTime") {
      rest.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
    }
    setRestaurantData(rest);
  };

  const filteredRestaurant =
    searchTerm.trim().length === 0
      ? restaurantData.restaurants
      : restaurantData.restaurants.filter((data) =>
          data.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="body-container">
      <div className="body-head-container">
        <h2>Restaurants with online food delivery in Chennai</h2>
        <div className="sort-filter-container">
          <select onChange={getValue}>
            <option value="">Filter</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="offers">Offers</option>
          </select>

          <select onChange={sortBy}>
            <option value="">Sort By</option>
            <option value="deliveryTime">Delivery Time</option>
            <option value="rating">Rating</option>
            <option value="lowToHigh">Cost: Low to High</option>
            <option value="highToLow">Cost: High to Low</option>
          </select>
        </div>
      </div>
      <div className="restro-card-container">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((rest) => (
            <Card key={rest.info.id} data={rest.info} />
          ))
        ) : (
          <p>No matching restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
