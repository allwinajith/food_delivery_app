import React, { useState } from "react";
import Card from "./Card";
import { restaurant_details } from "../utils/restro_details";
import "../styles/bodyStyles.css";

const Body = () => {
  const [restaurantData] = useState(restaurant_details);

  if (!restaurantData?.restaurants) {
    return <div>Loading or no data available...</div>;
  }

  return (
    <div className="body-container">
      {restaurantData.restaurants.map((rest) => (
        <Card key={rest.info.id} data={rest.info} />
      ))}
      
    </div>
  );
};

export default Body;
