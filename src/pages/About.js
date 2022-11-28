import React from 'react';
import { Nav } from '../components/Nav';
import { FallbackPageWrapper } from "react-current-page-fallback";

const About  = () => {
  return (
    <FallbackPageWrapper>
      <div>
        <Nav />
        <h1>About</h1>
      </div>
    </FallbackPageWrapper>
  );
};

export default About;