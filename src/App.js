import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

// Wrapper component to handle scrolling to the top on route changes
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <div className="App">
      {/* Routes are wrapped with the Wrapper component */}
      <Wrapper>
        <Routes>
          {/* Define routes and their corresponding components */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
