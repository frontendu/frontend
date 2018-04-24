import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import Link from 'gatsby-link';

import Image from '../components/Image';

import churchill from '../assets/churchill.svg';
import {colors} from '../constants';

injectGlobal`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${colors.red};
  }

  p {
    margin: 0;
  }

  a, a:hover, a:visited {
    color: ${colors.red};
  }

  a:hover, a:hover * {
    opacity: 0.7;
  }
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 690px;
  padding: 30px 25px 40px;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
  }
`;

const StyledRootHeader = styled.div`
  margin-bottom: 70px;
  text-align: center;
`;

const StyledP = styled.p`
  margin-top: 10px;
  color: ${colors.grey};
  font-size: 12px;
`;

const StyledH3 = styled.h3`
  margin-bottom: 70px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: 20px;
`;

const rootHeader = () => (
  <StyledRootHeader>
    <StyledLink to={'/'}>
      <Image src={churchill} maxWidth='100px' />
      <h1>frontend.youknow</h1>
    </StyledLink>
    <StyledP>News for the last day. Not only a boring list of articles and technologies that have appeared, <br /> but also the burgeoning of social networks and conferences.</StyledP>
  </StyledRootHeader>
);

const arcticleHeader = () => (
  <div>
    <StyledLink to={'/'}>
      <Image src={churchill} maxWidth='100px' />
      <StyledH3>frontend.youknow</StyledH3>
    </StyledLink>
  </div>
);

class Template extends React.Component {
  render() {
    const {location, children} = this.props;
    const rootPath = typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__
      ? `${__PATH_PREFIX__}/`
      : '/';

    const header = location.pathname === rootPath
      ? rootHeader()
      : arcticleHeader();

    return (
      <StyledWrapper>
        {header}
        <StyledChildrenWrapper>
          {children()}
        </StyledChildrenWrapper>
      </StyledWrapper>
    );
  }
}

export default Template;
