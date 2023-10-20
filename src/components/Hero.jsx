import React from 'react';
import styled from 'styled-components';

import { Text } from '../ui';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-image: url('bridge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Hero = () => {
  return (
    <Container>
      <Text type="display-h1">HERO</Text>
    </Container>
  );
};