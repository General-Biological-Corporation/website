import React from 'react';
import styled from 'styled-components';

import BuildingMaterials from '../images/building_materials.png';
import Electronics from '../images/electronics.png';
import PerformanceMaterials from '../images/performance_materials.png';
import Water from '../images/water.png';
import { Text } from '../ui';

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

const Container = styled.div`
  padding: 120px 180px;
  // linear gradient from left to right
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.palette.lightGrey}, ${theme.palette.darkGrey})`};

  > ${Text} {
    color: ${({ theme }) => theme.palette.black};
    margin-bottom: 35px;
  }
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;
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
      <Text type="display-h1">Serving Key Industries</Text>
      <Tiles>
        {data.map(({ photo, title }, index) => (
          <Industry key={index} photo={photo} index={index} title={title} />
        ))}
      </Tiles>
    </Container>
  );
};

export const Industry = ({ photo, index, title }) => {
  return (
    <Tile>
      <img src={photo} width="100%" height="auto" alt={title} />
      <Text type="industry-t1" className="number" color="orange">
        {`0${index + 1}`}
      </Text>
      <Text type="industry-t2" className="title">
        {title}
      </Text>
    </Tile>
  );
};
