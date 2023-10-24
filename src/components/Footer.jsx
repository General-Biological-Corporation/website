import React from 'react';
import styled from 'styled-components';

import { Column, Icons, SectionContainer, SectionContent, Text } from '../ui';

const Container = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.palette.brown};
  padding: 80px 0;
`;

const Content = styled(SectionContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: flex-start;
    > :last-child {
      display: none;
    }
  }
`;

const Branding = styled(Column)`
  align-items: flex-start;
  > :not(:first-child) {
    margin-top: 25px;
  }

  svg {
    width: 340px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    svg {
      width: 220px;
      height: 60px;
    }
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
      <Content>
        <Branding>
          <Icons.logoCombined />
          <Text type="text-t3">General Biological Corporation 2023</Text>
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
      </Content>
    </Container>
  );
};
