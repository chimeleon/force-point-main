import React from 'react';
import styled from 'styled-components';
import LookupCounter from './counter/LookupCounter';
import Total from './Total';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

interface Props {
  total: number;
}

const CounterTemplate: React.FC<Props> = () => {
  return (
    <Container>
      <LookupCounter />
    </Container>
  );
};

export default CounterTemplate;
