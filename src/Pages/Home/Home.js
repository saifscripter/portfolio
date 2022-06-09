import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <main>
      <Banner />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Home;
