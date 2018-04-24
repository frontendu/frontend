import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.time`
  display: block;
  font-size: 12px;
  margin-bottom: 20px;
`;

const Time = ({children}) => (<StyledTime>{children}</StyledTime>);

export default Time;
