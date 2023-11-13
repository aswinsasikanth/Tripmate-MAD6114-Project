import "./TripStyles.css";
import TripData from "./TripData";
import Banff from "../../assets/1.jpg";
import OldQuebec from "../../assets/3.webp";
import PolarBearSafari from "../../assets/4.jpg";

const Trip = () => {
  return (
    <div className="trip obj-width">
      <h1>Recent Trips</h1>
      <p>Explore the beauty and diversity of Canadian destinations.</p>
      <div className="tripcard">
        <TripData
          image={Banff}
          heading="Banff National Park, Alberta"
          text="Explore the majestic landscapes of Banff National Park, known for its stunning alpine scenery, crystal clear lakes, and abundant wildlife."
        />
        <TripData
          image={OldQuebec}
          heading="Old Quebec, Quebec City"
          text="Wander through the historic streets of Old Quebec, a UNESCO World Heritage site, offering a slice of European charm in North America."
        />
        <TripData
          image={PolarBearSafari}
          heading="Polar Bear Safari, Churchill, Manitoba"
          text="Embark on a thrilling polar bear safari in Churchill, the Polar Bear Capital of the World, for a unique wildlife viewing experience."
        />
      </div>
    </div>
  );
};

export default Trip;
