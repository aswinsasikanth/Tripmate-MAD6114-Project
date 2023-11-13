import Navbar from "../components/NavBar";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/9.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Header
        cName="header-mid"
        bgImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
