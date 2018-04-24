import React from 'react';
import styled from 'styled-components';

import Image from '../Image';

const StyledA = styled.a`
  display: inline-block;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialImage = ({images}) => (
  <div>
    {images.map((image, index) => (
      <StyledA href={image.link} key={index}>
        <Image src={image.src} width='25px' height='25px' />
      </StyledA>
    ))}
  </div>
);

export default SocialImage;
