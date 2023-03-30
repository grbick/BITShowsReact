import React, {useContext} from "react";
import "./showGrid.scss";
import ShowCard from "../ShowCard";
import { applicationContext } from "../../context";

const ShowGrid = (props) => {
  const { shows } = useContext(applicationContext);
  return (
    <div className="showGrid">
      {shows.map((show) => (
        <ShowCard
          show={show}
          // changeSelectedCharacter={()=> this.props.changeSelectedCharacter(show)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
