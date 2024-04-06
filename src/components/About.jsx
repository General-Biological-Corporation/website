import React from 'react';
import styled from 'styled-components';

import { SectionContainer, SectionContent, Text } from '../ui';

const Container = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.palette.browner};
  padding: 120px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 50px 0;
  }
`;

const Content = styled(SectionContent)`
  > :nth-child(2) {
    margin: 60px 0 30px 0;
  }
`;

const JoinUsButton = styled.div`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.palette.gold};
  padding: 10px 20px;
  border-radius: 50px;
  width: fit-content;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.05);
  }
`;

export const About = () => {
  return (
    <Container>
      <Content>
        <Text type="display-h1">A new era of bioproduction</Text>
        <Text type="mono-t3">
          The multi-trillion dollar chemicals industry underlies every aspect of
          the modern industrial economy but is built on toxic process, rotting
          infrastructure, and a need for oil.
        </Text>
        <Text type="mono-t3">
          General Biological is changing that by{' '}
          <b>
            catalyzing a shift from industrial chemistry to industrial biology.
          </b>
        </Text>

        <JoinUsButton>
          <a
            href="https://general-biological.breezy.hr/preview"
            target="_blank"
            rel="noreferrer"
          >
            <Text type="mono-h2">Join Us</Text>
          </a>
        </JoinUsButton>
      </Content>
    </Container>
  );
};
