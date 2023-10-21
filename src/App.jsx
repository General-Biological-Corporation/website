import React, { useEffect, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import styled, { ThemeProvider } from 'styled-components';

import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Industries } from './components/Industries';
import { Technology } from './components/Technology';
import { base, GlobalStyle } from './ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const App = () => {
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    if (scroll) {
      scroller.scrollTo(scroll, {
        smooth: true,
        duration: 500,
        offset: -10
      });
      setScroll('');
    }
  }, [scroll]);

  return (
    <ThemeProvider theme={base}>
      <GlobalStyle />
      <Container>
        <Hero scrollTo={(name) => setScroll(name)} />
        <Element name="about">
          <About />
        </Element>
        <Element name="technology">
          <Technology />
        </Element>
        <Industries />
        <Footer scrollTo={(name) => setScroll(name)} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
