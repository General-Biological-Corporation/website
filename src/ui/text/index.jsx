import React from 'react';
import styled from 'styled-components';

import { useDimensions } from '../../hooks/useDimensions';

const TextStyle = styled.div`
  ${({ textStyle, isMobile, isTablet, theme }) =>
    textStyle
      ? `font: ${
          theme.textStyles[
            isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
          ][textStyle]
        };`
      : ''}
  margin: 0;
  padding: 0;
  backface-visibility: hidden;
  ${({ capitalize }) => (capitalize ? `text-transform: uppercase;` : '')}
  ${({ italic }) => (italic ? `font-style: italic;` : '')}
  ${({ color, theme }) => (color ? `color: ${theme.palette[color]};` : '')}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')}
  ${({ size }) => (size ? `font-size: ${size}px;` : '')}
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : '')}
`;

export const _Text = ({ type, children, ...rest }) => {
  const { isMobile, isTablet } = useDimensions();

  return (
    <TextStyle
      textStyle={type}
      isMobile={isMobile}
      isTablet={isTablet}
      {...rest}
    >
      {children}
    </TextStyle>
  );
};

// allow Text to be used in styled components interlopated child selector
export const Text = styled(_Text)``;
