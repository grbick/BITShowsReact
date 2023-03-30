import React from "react";
import "./searchInput.scss";
import lupica from '../../images/lupica.svg'

const SearchInput = () => {
  return (
    <div className="searchInput">
      <img src={lupica} alt="" />
      <input type="text" name="" id="search" placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
