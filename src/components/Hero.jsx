import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

import { useDimensions } from '../hooks/useDimensions';
import { Icons, Row, SectionContainer, SectionContent, Text } from '../ui';
import { palette } from '../ui/theme/base/palette';

const Container = styled(SectionContainer)`
  height: 100vh;
  padding: 50px 0;
  background-image: url('images/bridge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 0;
  }
`;

const Content = styled(SectionContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled(Row)`
  justify-content: space-between;

  > :first-child {
    width: 90px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    > :first-child {
      width: 60px;
      height: 60px;
    }
  }
`;

const NavButtons = styled(Row)`
  > :not(:last-child) {
    margin-right: 40px;
  }

  > * {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.palette.gold};
    }
  }
`;

export const Burger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 8px;

  transition: background-color 0.2s ease-in-out;

  ${({ active }) => active && `background-color: rgba(255, 255, 255, 0.1);`}
`;

export const Drawer = styled.div`
  ${({ open }) => `
    max-height: ${open ? '200px' : '0'};
  `}
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-top: 20px;
  }
`;

const Body = styled.div`
  margin: auto auto 15vh 0;

  > :not(:first-child) {
    margin-top: 25px;
  }

  svg {
    height: 180px;
    width: 488px;
  }

  ${Text} {
    max-width: 840px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    svg {
      height: 100px;
      width: 244px;
    }

    margin: auto auto auto 0;
  }
`;

export const Hero = ({ scrollTo }) => {
  const { isMobile } = useDimensions();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Container>
      <Content>
        <Navbar>
          <Icons.logo />
          {!isMobile ? (
            <NavButtons>
              <Text type="display-h2" onClick={() => scrollTo('about')}>
                About
              </Text>
              <Text type="display-h2" onClick={() => scrollTo('technology')}>
                Technology
              </Text>
              <a href="mailto:info@generalbiological.com">
                <Text type="display-h2">Contact Us</Text>
              </a>
            </NavButtons>
          ) : (
            <Burger
              active={drawerOpen}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <FiMenu size={40} color={palette.white} />
            </Burger>
          )}
        </Navbar>
        {isMobile && (
          <Drawer open={drawerOpen}>
            <Text
              type="display-h2"
              onClick={() => {
                scrollTo('about');
                setDrawerOpen(false);
              }}
            >
              About
            </Text>
            <Text
              type="display-h2"
              onClick={() => {
                scrollTo('technology');
                setDrawerOpen(false);
              }}
            >
              Technology
            </Text>
            <a href="mailto:info@generalbiological.com">
              <Text type="display-h2">Contact Us</Text>
            </a>
          </Drawer>
        )}
        <Body>
          <Icons.logoWords />
          <Text type="display-h2" weight={500}>
            Reimagining the chemical and material economy to secure our industry,
            our country, and our planet.
          </Text>
        </Body>
      </Content>
    </Container>
  );
};
