import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Image from "../assets/7.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header
        cName="header"
        bgImg={Image}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        buttonText="Travel Plan"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
