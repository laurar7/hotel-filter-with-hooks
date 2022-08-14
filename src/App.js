import React, { useState } from "react";
import Hotels from "./Hotels/HotelsList";
import Filters from "./Filters/FilterList";

const App = () => {
  const [selectedFilters, setSelectedFilter] = useState([]);

  const toggleFilter = (clickedFilterKey) => {
    const alreadySelected = selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      setSelectedFilter((prevFilters) =>
        prevFilters.filter((filter) => filter !== clickedFilterKey)
      );
    } else {
      setSelectedFilter([...selectedFilters, clickedFilterKey]);
    }
  };

  return (
    <div className="App">
      <Filters toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
      <Hotels selectedFilters={selectedFilters} />
    </div>
  );
};

export default App;
