import React from 'react';
import styled from 'styled-components';

import BuildingMaterials from '../images/building_materials.png';
import Electronics from '../images/electronics.png';
import PerformanceMaterials from '../images/performance_materials.png';
import Water from '../images/water.png';
import { SectionContainer, SectionContent, Text } from '../ui';

const data = [
  {
    photo: PerformanceMaterials,
    title: 'PERFORMANCE MATERIALS'
  },
  {
    photo: Electronics,
    title: 'ELECTRONICS'
  },
  {
    photo: Water,
    title: 'INDUSTRIAL WATER'
  },
  {
    photo: BuildingMaterials,
    title: 'BUILDING MATERIALS'
  }
];

const Container = styled(SectionContainer)`
  padding: 120px 0 150px 0;
  // linear gradient from left to right
  background: linear-gradient(
    99.78deg,
    rgba(0, 0, 0, 0) 13%,
    rgba(0, 0, 0, 0.3) 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 50px 0;
  }
`;

const Content = styled(SectionContent)`
  > ${Text} {
    color: ${({ theme }) => theme.palette.black};
    margin-bottom: 48px;
  }
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  height: 95%;

  > ${Text} {
    position: absolute;
  }

  > .number {
    top: 15px;
    right: 20px;
  }

  > .title {
    bottom: 25px;
    left: 25px;
    max-width: 220px;
  }
`;

export const Industries = () => {
  return (
    <Container>
      <Content>
        <Text type="display-h1">Serving Key Industries</Text>
        <Tiles>
          {data.map(({ photo, title }, index) => (
            <Industry key={index} photo={photo} index={index} title={title} />
          ))}
        </Tiles>
      </Content>
    </Container>
  );
};

export const Industry = ({ photo, index, title }) => {
  return (
    <Tile>
      <img src={photo} width="100%" height="auto" alt={title} />
      <Text type="mono-t1" className="number">
        {`0${index + 1}`}
      </Text>
      <Text type="mono-t4" className="title">
        {title}
      </Text>
    </Tile>
  );
};
