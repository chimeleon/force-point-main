import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.input`
  width: 80px;
  max-height: 38px;
  margin-left: 0.5rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${oc.gray[5]};
`;

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ name, value, onChange, onKeyPress }) => {
  return (
    <Container
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={name[0].toUpperCase() + name.slice(1)}
    />
  );
};

export default Input;