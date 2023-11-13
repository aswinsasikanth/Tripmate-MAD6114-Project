import React from "react";
import LakeLouise from "../../assets/1.jpg";
import Banff from "../../assets/2.jpeg";
import NiagaraFalls from "../../assets/5.jpg";
import CNTower from "../../assets/6.jpg";
import DestinationData from "./DestinationData";

// Destination component to display popular destinations in Canada
const Destination = () => {
  return (
    <>
      <div className="destination obj-width">
        <h1>Popular Destinations in Canada</h1>
        <p>Explore the vast beauty and diversity of Canada's landscapes.</p>

        {/* Destination: Banff National Park, Alberta */}
        <DestinationData
          className="first-des"
          heading="Banff National Park, Alberta"
          text="Located in the heart of the Canadian Rockies, Banff National Park is home to stunning turquoise lakes, snow-capped peaks, and abundant wildlife. Visitors can enjoy hiking, canoeing, and breathtaking views from the Banff Gondola."
          img1={LakeLouise}
          img2={Banff}
        />

        {/* Destination: Niagara Falls, Ontario */}
        <DestinationData
          className="first-des-reverse"
          heading="Niagara Falls, Ontario"
          text="One of the world's most famous waterfalls, Niagara Falls offers awe-inspiring views and thrilling experiences. Take a boat tour to get close to the falls, walk behind the cascades, or view the spectacular sight from observation decks."
          img1={NiagaraFalls}
          img2={CNTower}
        />
      </div>
    </>
  );
};

export default Destination;
