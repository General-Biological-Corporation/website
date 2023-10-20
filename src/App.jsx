import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Hero } from './components/Hero';
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
  return (
    <ThemeProvider theme={base}>
      <GlobalStyle />
      <Container>
        <Hero />
      </Container>
    </ThemeProvider>
  );
};

export default App;
