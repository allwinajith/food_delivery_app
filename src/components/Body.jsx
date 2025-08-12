import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/bodyStyles.css";
import Shimmer from "./Shimmer";

const Body = ({ searchTerm }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchRes = await fetch(
          "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await fetchRes.json();
        // console.log(json.data.cards[4].card.card.gridElements);
        // console.log(
        //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]
        //     .info
        // );
        setRestaurantData(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        console.log(err);
        setError("Error in fetching the data");
      }
    }
    fetchData();
  }, []);
  
  const getValue = (e) => {
    console.log(e.target.value);
  };

  const sortBy = (e) => {
    const rest = [...restaurantData];
    if (e.target.value === "deliveryTime") {
      rest.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
    }
    setRestaurantData(rest);
  };

  const filteredRestaurant =
    searchTerm.trim().length === 0
      ? restaurantData
      : restaurantData.filter((data) =>
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
        {restaurantData.length === 0 && !error ? (
          <Shimmer />
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : filteredRestaurant.length > 0 ? (
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
