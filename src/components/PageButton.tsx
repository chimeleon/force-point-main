import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${oc.gray[8]};
  &:hover {
    background: ${oc.gray[6]};
  }
  &:disabled {
    background: ${oc.gray[3]};
    color: ${oc.gray[5]};
    cursor: not-allowed;
  }
`;

interface PageButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return disabled ? (
    <Button disabled>{children}</Button>
  ) : (
    <Button onClick={onClick}>{children}</Button>
  );
};

export default PageButton;