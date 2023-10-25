import React from 'react';
import styled from 'styled-components';

import { Icons, Text } from '../ui';
import { Color } from '../util';

const data = [
  {
    icon: <Icons.cycle width={115} />,
    title: 'CONTINUOUS MANUFACTURING',
    description:
      'Traditional bioproduction runs in massive infrastructure with significant downtime. Our whole-cell catalyst technology never stops, sustaining molecule generation at rates 10x the competition.'
  },
  {
    icon: <Icons.chemistry width={118} />,
    title: 'SUGAR,\n NOT OIL',
    description: (
      <>
        Traditional petrochemistry loses up to half of input carbon (from oil)
        as CO<sub>2</sub>. We engineer state-of-the-art enzymes to convert
        renewable carbon (from sugar) and fix CO<sub>2</sub> directly, resulting
        in high yields, low costs, and zero emissions.
      </>
    )
  },
  {
    icon: <Icons.chart width={115} />,
    title: 'SUPERCHARGED SCALING',
    description:
      'Traditional bioproduction takes years and enormous fixed costs to meet demand. Our in-house fabricated bioreactors take new molecules to industrial volumes on a serious budget within months, not decades.'
  }
];

const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('images/chemistry.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  > ${Text} {
    margin-bottom: 65px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 50px 12px;
  }
`;

const Tiles = styled.div`
  display: flex;
  flex-direction: row;

  > :not(:last-child) {
    margin-right: 50px;
  }

  @media (max-width: 1200px) {
    > :not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 50px;
    }
  }
`;

const Tile = styled.div`
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.white, 0.5)};
  border-radius: 20px;
  padding: 40px 50px 30px 50px;
  width: 350px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Text} {
    text-align: center;
    color: ${({ theme }) => theme.palette.black};
  }

  svg {
    margin-bottom: 30px;
  }

  > :last-child {
    margin-top: 8px;
  }

  ${({ top }) => `margin-${top ? 'bottom' : 'top'}: 65px;`}

  @media (max-width: 1200px) {
    padding: 30px 20px 20px 20px;
    width: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 30px 20px 20px 20px;
    width: 100%;
    max-width: 350px;
    margin-top: 0;
    margin-bottom: 0;
    box-sizing: border-box;
  }
`;

export const Technology = () => {
  return (
    <Container>
      <Text type="display-h1" color="black">
        Our Technology
      </Text>
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
    </Container>
  );
};

const TechTile = ({ icon, title, description, top }) => {
  return (
    <Tile top={top}>
      {icon}
      <Text type="display-h3">{title}</Text>
      <Text type="text-t2" weight={500}>
        {description}
      </Text>
    </Tile>
  );
};
