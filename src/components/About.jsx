import React from 'react';
import styled from 'styled-components';

import { Text } from '../ui';
import { Color } from '../util';

const Container = styled.div`
  padding: 120px 180px;
  background-image: url('images/texture.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  > :nth-child(2) {
    margin: 60px 0 30px 0;
  }
`;

const Highlight = styled.span`
  box-shadow: inset 0 -20px 0 ${({ theme }) => Color.makeHexTranslucent(theme.palette.gold, 0.8)};
`;

export const About = () => {
  return (
    <Container>
      <Text type="display-h1">Who We Are</Text>
      <Text type="text-t1" weight={400}>
        The multi-trillion dollar chemicals industry underlies every aspect of
        the modern industrial economy but is built on toxic process, rotting
        infrastructure, and a need for oil.
      </Text>
      <Text type="text-t1" weight={700}>
        General Biological is changing that by{' '}
        <Highlight>
          catalyzing a shift from industrial chemistry to industrial biology
        </Highlight>
        .
      </Text>
    </Container>
  );
};