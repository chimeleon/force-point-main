import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.button<Props>`
  font-size: 0.912rem;
  font-weight: bold;
  padding: 0 0.9rem;
  margin-left: 0.5rem;
  background: white;
  border: 1px solid ${oc.gray[7]};
  border-radius: 5px;
  color: ${oc.gray[7]};
  max-height: 38px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  &:hover {
    background: ${oc.gray[6]};
    border: 1px solid ${oc.gray[5]};
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }

  ${(props) =>
    props.cyan &&
    css`
      border: 1px solid ${oc.cyan[7]};
      color: ${oc.cyan[7]};

      &:hover {
        background: ${oc.cyan[6]};
        border: 1px solid ${oc.cyan[5]};
        color: white;
      }
    `}

  ${(props) =>
    props.green &&
    css`
      background: ${oc.green[6]};
      color: white;
      border: 1px solid ${oc.green[8]};

      &:hover {
        background: white;
        color: ${oc.green[8]};
        border: 1px solid ${oc.green[8]};
      }
    `}
`;

interface Props {
  cyan?: boolean;
  green?: boolean;
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