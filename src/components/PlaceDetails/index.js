import "../PlaceDetails/PlaceDetailsStyles.css";

const PlaceDetails = () => {
  return (
    <div className="about-container obj-width">
      {/* Section for company history */}
      <h1>Our History</h1>
      <p>
        TripMate is owned and managed by TripMate.In Pvt. Ltd., a leading brand
        in web designing services and e-commerce solutions. TripMate.In Pvt.
        Ltd. is counted for its expertise in web solutions and its top ranking
        business portals. Our invincible expertise and rich experience has
        raised our spirit to reach ahead from our client's expectation.
        Commendable success rate of other portals managed by TripMate is a live
        paradigm of our work excellence.
      </p>

      {/* Section for company mission */}
      <h1>Our Mission</h1>
      <p>
        Our mission is to touch the horizon where our capabilities may
        successfully meet with the requirements of our clients, that too with
        ultimate transparency and cost-effectiveness.
      </p>

      {/* Section for company vision */}
      <h1>Our Vision</h1>
      <p>
        To sow the seeds of par-excellence services with customer centric
        approach and reap the trust of worldwide clients.
      </p>
    </div>
  );
};

export default PlaceDetails;
