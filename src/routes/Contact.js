import Navbar from "../components/NavBar";
import Header from "../components/Header";
import AboutImg from "../assets/2.jpeg";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header
        cName="header-mid"
        bgImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
