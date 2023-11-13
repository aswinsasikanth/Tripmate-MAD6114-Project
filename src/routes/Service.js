import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import AboutImg from "../assets/8.jpg";

const Service = () => {
  return (
    <>
      <Navbar />
      <Header
        cName="header-mid"
        bgImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
