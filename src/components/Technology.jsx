import React from 'react';
import styled from 'styled-components';

import { Icons, SectionContainer, SectionContent, Text } from '../ui';

const data = [
  {
    icon: <Icons.cycle width={73} />,
    title: 'Continuous\nmanufacturing',
    description:
      'Traditional bioproduction runs in massive infrastructure with significant downtime. Our whole-cell catalyst technology never stops, sustaining molecule generation at rates 10x the competition.'
  },
  {
    icon: <Icons.chemistry width={85} />,
    title: 'Sugar, not oil',
    description: (
      <>
        Traditional petrochemistry loses up to half of input carbon (from oil)
        as as CO
        <sub>2</sub>. We engineer state-of-the-art enzymes to convert renewable
        carbon (from sugar) and fix CO<sub>2</sub> directly, resulting in high
        yields, low costs, and zero emissions.
      </>
    )
  },
  {
    icon: <Icons.chart width={80} />,
    title: 'Supercharged\nscaling',
    description:
      'Traditional bioproduction takes years and enormous fixed costs to meet demand. Our in-house fabricated bioreactors take new molecules to industrial volumes on a serious budget within months, not decades.'
  }
];

const Container = styled(SectionContainer)`
  padding: 160px 0 200px 0;
  background-image: url('images/texture.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 50px 12px;
  }
`;

const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  > ${Text} {
    margin-bottom: 100px;
  }
`;

const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > :not(:last-child) {
    margin-right: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    justify-content: center;

    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 50px;
    }
  }
`;

const Tile = styled.div`
  width: 307px;
  height: max-content;
  display: grid;
  grid-template-rows: 80px auto;
  row-gap: 24px;

  > div {
    > :first-child {
      margin-bottom: 24px;
    }
  }
`;

export const Technology = () => {
  return (
    <Container>
      <Content>
        <Text type="display-h1">Our Technology</Text>
        <Tiles>
          {data.map(({ icon, title, description }, index) => (
            <TechTile
              key={index}
              icon={icon}
              title={title}
              description={description}
              top={index % 2}
            />
          ))}
        </Tiles>
      </Content>
    </Container>
  );
};

const TechTile = ({ icon, title, description, top }) => {
  return (
    <Tile top={top}>
      {icon}
      <div>
        <Text type="display-h3" weight={700} size={28}>
          {title}
        </Text>
        <Text type="text-t1" weight={500}>
          {description}
        </Text>
      </div>
    </Tile>
  );
};
