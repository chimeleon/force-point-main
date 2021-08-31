import React from 'react';
import styled from 'styled-components';
import Logout from './Logout';
import Range from './Range';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 12px;
`;

interface Props {
  onLogout: () => void;
}

const TopTemplate: React.FC<Props> = ({ onLogout }) => {
  return (
    <Container>
      <Range />
      <Logout onLogout={onLogout} />
    </Container>
  );
};

export default TopTemplate;
