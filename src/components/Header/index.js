import React from "react";
import "./HeaderStyles.css";

// The Header component receives props for customization
const Header = (props) => {
  return (
    // The header's main container with a dynamic class name
    <div className={props.cName}>
      {/* Image for the header with alt text */}
      <img src={props.bgImg} alt="bgImg" />

      {/* Container for the text content */}
      <div className="header-text">
        {/* Title (Heading) of the header */}
        <h1>{props.title}</h1>

        {/* Description or additional text */}
        <p>{props.text}</p>

        {/* Optional button, rendered only if buttonText is provided */}
        {props.buttonText && (
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
