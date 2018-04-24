import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${({width}) => width};
  height: ${({height}) => height};
  max-width: ${({maxWidth}) => maxWidth};
  max-height: ${({maxHeight}) => maxHeight};
  margin-bottom: 0;
`;

const Image = ({src, width, height, maxWidth, maxHeight}) => (
  <StyledImage src={src} width={width} height={height} maxWidth={maxWidth} maxHeight={maxHeight} />
);

export default Image;
