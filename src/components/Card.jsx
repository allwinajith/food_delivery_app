import React from "react";
import { FcRating } from "react-icons/fc";
import { FaRegClock } from "react-icons/fa6";
import "../styles/cardStyles.css";

const Card = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    totalRatingsString,
    sla,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
  } = data;
  // console.log(infoaggregatedDiscountInfoV3)

  return (
    <div key={data.id} className="card-container">
      <div className="img-container">
        <img
          className="restaurant-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="restaurant-card"
        />

        {data.aggregatedDiscountInfoV3 && (
          <div className="restaurant-offer">
            {data.aggregatedDiscountInfoV3.header}{" "}
            {data.aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>
      <div className="res-details-container">
        <div className="restaurant-name">{name}</div>
        <div className="restaurant-rating">
          <span className="rating-container">
            {<FcRating />}
            {avgRating} ({totalRatingsString})
          </span>
          <span className="delivery-time-container">
            <FaRegClock />
            {sla.slaString}
          </span>
        </div>
        <div className="restaurant-cuisine">{cuisines.join(", ")}</div>
        <div className="restaurant-location">
          {areaName
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          {/* <span style={{ fontSize: "13px" }}>{costForTwo}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
