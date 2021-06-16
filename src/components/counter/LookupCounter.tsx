import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { Counter } from '../../store';

// Styles
const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .counter {
    min-width: 100px;
  }
`;

interface Props {}

const options = [
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

const LookupCounter: React.FC<Props> = () => {
  const [counter, setCounter] = useRecoilState(Counter);

  const onChange = (e: any) => {
    setCounter({ value: e.value, label: e.label });
  };

  return (
    <Container>
      <Select
        className="counter"
        options={options}
        onChange={onChange}
        hideSelectedOptions={true}
        placeholder={counter.value}
      />
    </Container>
  );
};

export default LookupCounter;