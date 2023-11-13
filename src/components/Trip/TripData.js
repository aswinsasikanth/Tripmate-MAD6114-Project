import "./TripStyles.css";

const TripData = (props) => {
  return (
    // Container for each trip card
    <div className="t-card">
      {/* Image container */}
      <div className="t-image">
        {/* Image for the trip */}
        <img src={props.image} alt="trip" />
      </div>
      {/* Heading for the trip */}
      <h4>{props.heading}</h4>
      {/* Description for the trip */}
      <p>{props.text}</p>
    </div>
  );
};

export default TripData;
