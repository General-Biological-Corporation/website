import React from 'react';
import styled from 'styled-components';

import { Column, Icons, Row, Text } from '../ui';

const Container = styled(Row)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.brown};
  padding: 80px 180px;
  justify-content: space-between;
`;

const Branding = styled(Column)`
  > :not(:first-child) {
    margin-top: 25px;
  }
`;

const Nav = styled(Column)`
  align-items: flex-start;
  > :not(:first-child) {
    cursor: pointer;
    margin-top: 15px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.palette.gold};
    }
  }
`;

export const Footer = ({ scrollTo }) => {
  return (
    <Container>
      <Branding>
        <Icons.logoCombined width={340} height={90} />
        <Text type="text-t2">General Biological Corporation 2023</Text>
      </Branding>
      <Nav>
        <Text type="display-h2" weight={700}>
          Navigate
        </Text>
        <Text type="display-h4" onClick={() => scrollTo('about')}>
          About
        </Text>
        <Text type="display-h4" onClick={() => scrollTo('technology')}>
          Technology
        </Text>
        <a href="mailto:info@generalbiological.com">
          <Text type="display-h4">Contact Us</Text>
        </a>
      </Nav>
    </Container>
  );
};
