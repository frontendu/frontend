import React from 'react';
import styled from 'styled-components';

import Image from '../components/Image';
import Link from '../components/Link';
import Title from '../components/Title';

import churchill from '../assets/churchill.svg';
import {colors} from '../constants';

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 690px;
  padding: 30px 25px 40px;
`;

const StyledRootHeader = styled.div`
  margin-bottom: 70px;
  text-align: center;
`;

const StyledArticleHeader = styled.div`
  margin-bottom: 70px;
`;

const StyledLead = styled.p`
  margin: 10px 0 0;
  color: ${colors.grey};
  font-size: 12px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: 20px;
`;

const rootHeader = () => (
  <StyledRootHeader>
    <Link to={'/'}>
      <Image src={churchill} maxWidth='100px' />
      <Title level='1'>frontend.youknow</Title>
    </Link>
    <StyledLead>News for the last day. Not only a boring list of articles and technologies that have appeared, <br /> but also the burgeoning of social networks and conferences.</StyledLead>
  </StyledRootHeader>
);

const arcticleHeader = () => (
  <StyledArticleHeader>
    <Link to={'/'}>
      <Image src={churchill} maxWidth='100px' />
      <Title level='3'>frontend.youknow</Title>
    </Link>
  </StyledArticleHeader>
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
