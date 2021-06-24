import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { Counter, Page } from '../../store';

// Styles
const Container = styled.div`
  display: flex;
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
  const [, setPage] = useRecoilState(Page);

  const onChange = (e: any) => {
    setCounter({ value: e.value, label: e.label });
    setPage((prev) => ({
      ...prev,
      currentPage: 0,
    }));
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
