import React from "react";
import "./DestinationStyles.css";

// DestinationData component for displaying destination details
const DestinationData = (props) => {
  return (
    // Container for the destination data, className allows for custom styles
    <div className={props.className}>
      {/* Text section for the destination */}
      <div className="des-text">
        {/* Heading for the destination */}
        <h2>{props.heading}</h2>
        {/* Description text for the destination */}
        <p>{props.text}</p>
      </div>

      {/* Image container for destination images */}
      <div className="image">
        {/* First image for the destination */}
        <img src={props.img1} alt="Destination" />
        {/* Second image for the destination */}
        <img src={props.img2} alt="Destination" />
      </div>
    </div>
  );
};

export default DestinationData;
