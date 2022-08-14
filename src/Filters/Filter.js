import React from "react";
import { hotels } from "../data.js";

const Filter = ({ filter, isChecked, toggleFilter }) => {
  /* it is not enough to just call props.toggleFilter when the input 
  is clicked, we need to call props.toggleFilter with an argument 
  that indicates WHICH input has been clicked, so we create this
  onChange function here for each Filter component that is rendered */
  const option = filter.key;
  const matchCount = hotels.filter((hotel) => hotel[option]).length;

  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleFilter(filter.key)}
          className="filter__checkbox"
        />
        {filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
