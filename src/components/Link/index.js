import React from 'react';
import styled, {css} from 'styled-components';
import Link from 'gatsby-link';

import {colors} from '../../constants';

const styles = css`
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

const StyledLink = styled(Link)`${styles}`;

const StyledA = styled.a`${styles}`;

const CommonLink = ({to, href, children}) => {
  return to
    ? <StyledLink to={to}>{children}</StyledLink>
    : <StyledA href={href}>{children}</StyledA>;
};

export default CommonLink;
