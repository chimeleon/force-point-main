import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  padding-right: 0.3rem;
`;

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  const stringAccounting = (text: number) => {
    if (text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') === 'NaN') {
      return '';
    } else {
      return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  return <Container>Total: {stringAccounting(total)}</Container>;
};

export default Total;