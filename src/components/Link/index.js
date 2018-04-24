import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import {colors} from '../../constants';

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: ${colors.red};

  &:hover {
    opacity: 0.7;

    * {
      opacity: 0.7;
    }
  }

  &:visited {
    text-decoration: none;
    color: ${colors.red};
  }
`;

const CommonLink = ({to, children}) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
);

export default CommonLink;
