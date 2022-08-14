import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const HotelsList = ({ selectedFilters }) => {
  const filteredHotels = hotels.filter((hotel) => {
    return selectedFilters.every((filter) => hotel[filter]);
  });

  const hotelListElements = filteredHotels.map((hotel) => (
    <Hotel key={hotel.id} hotel={hotel} />
  ));

  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
