import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SectionContent = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1144px;
  padding-left: 50px;
  padding-right: 50px;
`;
