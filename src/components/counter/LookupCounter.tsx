import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { Counter, EvidenceType, Page } from '../../store';

// Styles
const Container = styled.div`
  display: flex;

  .counter {
    min-width: 100px;
    margin-right: 0.5rem;
  }

  .event {
    min-width: 100px;
  }
`;

interface Props {}

const options = [
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

const evidenceOptions = [
  { value: 'ALL', label: 'ALL' },
  { value: 'EVENT', label: 'EVENT' },
  { value: 'COLLECTION', label: 'COLLECTION' },
];

const LookupCounter: React.FC<Props> = () => {
  const [counter, setCounter] = useRecoilState(Counter);
  const [evidenceType, setEvidenceType] = useRecoilState(EvidenceType);
  const [, setPage] = useRecoilState(Page);


  const onChange = (e: any) => {
    setCounter({ value: e.value, label: e.label });
    setPage((prev) => ({
      ...prev,
      currentPage: 0,
    }));
  };

  const onChangeEvent = (e: any) => {
    setEvidenceType({ value: e.value, label: e.label });
    setPage((prev) => ({
      ...prev,
      currentPage: 0,
    }));
  }

  return (
    <Container>
      <Select
        className="counter"
        options={options}
        onChange={onChange}
        hideSelectedOptions={true}
        placeholder={counter.value}
      />

      <Select
        className="event"
        options={evidenceOptions}
        onChange={onChangeEvent}
        hideSelectedOptions={true}
        placeholder={evidenceType.value}
      />
    </Container>
  );
};

export default LookupCounter;
