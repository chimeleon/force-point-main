import React from 'react';
import styled from 'styled-components';

// Styles
const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default PageTemplate;