import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="obj-width">
          {/* Top Section */}
          <div className="top">
            <div>
              <h1>TripMate</h1>
              <p>Choose your favourite destination.</p>
            </div>
            <div>
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="https://www.behance.net/">
                <i className="fa-brands fa-behance-square"></i>
              </a>
              <a href="https://www.twitter.com/">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom">
            <div>
              {/* Various footer links and sections */}
              <h4>Project</h4>
              <a href="https://www.lambtoncollege.ca/">Dhruvrajsinh Rathod</a>
              <a href="https://www.lambtoncollege.ca/">
                Aswinsasikanth Kanduri
              </a>
              <a href="https://www.lambtoncollege.ca/">Kavitha Bhandari</a>
              <a href="https://www.lambtoncollege.ca/">Harisankar Jayraman</a>
            </div>
            <div>
              <h4>Community</h4>
              <a href="https://github.com/">GitHub</a>
            </div>
            <div>
              <h4>Help</h4>
              <a href="contact">Support</a>
              <a href="contact">Contact Us</a>
            </div>
            <div>
              <h4>Others</h4>
              <a href="https://www.lambtoncollege.ca/">Terms of Service</a>
              <a href="https://www.lambtoncollege.ca/">Privacy Policy</a>
              <a href="https://www.lambtoncollege.ca/">License</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
