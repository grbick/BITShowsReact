import React from "react";
import "./main.scss";
import SearchInput from "../SearchInput";
import ShowGrid from "../ShowGrid";
import Pagination from "../Pagination";

const Main = (props) => {
  return (
    <div className="main">
      <SearchInput />
      <ShowGrid shows={props.shows}/>
      <Pagination />
    </div>
  );
};

export default Main;
