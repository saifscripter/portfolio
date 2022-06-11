import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
  return (
    <main>
      <Banner />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Home;
