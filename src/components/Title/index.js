import React from 'react';
import styled from 'styled-components';

import {colors} from '../../constants';

const TitleLevel1 = styled.h1`
  color: ${colors.red};
  margin: 0;
`;
const TitleLevel2 = TitleLevel1.withComponent('h2');
const TitleLevel3 = TitleLevel1.withComponent('h3');
const TitleLevel4 = TitleLevel1.withComponent('h4');

const Title = ({level, children}) => {
  let StyledTitle = null;

  switch (level) {
    case '2': {
      StyledTitle = TitleLevel2;
      break;
    }
    case '3': {
      StyledTitle = TitleLevel3;
      break;
    }
    case '4': {
      StyledTitle = TitleLevel4;
      break;
    }
    default: {
      StyledTitle = TitleLevel1;
    }
  }

  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};

export default Title;
