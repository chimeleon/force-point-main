import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 36px;
`;

interface Props {}

const ExcelExport: React.FC<Props> = () => {
  return (
    <Container>
      <Button green={true}>ExcelExport</Button>
    </Container>
  );
};

export default ExcelExport;
