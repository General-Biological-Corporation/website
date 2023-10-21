import React from 'react';
import styled from 'styled-components';

import { Icons, Row, Text } from '../ui';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-image: url('images/bridge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1144px;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled(Row)`
  justify-content: space-between;
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

const Body = styled.div`
  margin: auto auto 15vh 0;

  > :not(:first-child) {
    margin-top: 25px;
  }

  ${Text} {
    max-width: 840px;
  }
`;

export const Hero = ({ scrollTo }) => {
  return (
    <Container>
      <Content>
        <Navbar>
          <Icons.logo width={90} height={90} />
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
        </Navbar>
        <Body>
          <Icons.logoWords height={180} width={488} />
          <Text type="display-h2" weight={500}>
            Rethinking the chemical and material economy to secure our industry,
            our country, and our planet.
          </Text>
        </Body>
      </Content>
    </Container>
  );
};
