import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.button`
  font-size: 0.912rem;
  font-weight: bold;
  padding: 0 0.9rem;
  margin-left: 1rem;
  background: white;
  border: 1px solid ${oc.cyan[7]};
  border-radius: 5px;
  color: ${oc.cyan[7]};
  cursor: pointer;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  &:hover {
    background: ${oc.cyan[6]};
    border: 1px solid ${oc.cyan[5]};
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }
`;

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  const htmlProps = rest as any;

  return (
    <Container
      {...htmlProps}
      onClick={e => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </Container>
  );
};

export default Button;