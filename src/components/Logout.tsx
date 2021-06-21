import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 36px;
`;

interface Props {
  onLogout: () => void;
}

const Logout: React.FC<Props> = ({ onLogout }) => {
  return (
    <Container>
      <Button onClick={onLogout}>Logout</Button>
    </Container>
  );
};

export default Logout;
