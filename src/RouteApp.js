import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FallbackProvider } from "react-current-page-fallback";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

// react-router-dom V6
const RouteApp = () => {
  return (
    <Router>
      <div>
        <FallbackProvider>
          <Routes>
            <Route path="/about" element={ <About />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/" element={ <Home />} />
          </Routes>
        </FallbackProvider>
      </div>
    </Router>
  );
};
export default RouteApp;