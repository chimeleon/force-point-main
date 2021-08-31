import React, { useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import { RangeFrom, RangeFromDate, RangeTo } from '../store';

const Container = styled.div`
  display: flex;
  margin-left: 0.5rem;
  label {
    display: flex;
    align-self: center;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  input {
    border-radius: 4px;
    width: 120px;
    height: 34px;
    outline: none;
    border: 1px solid ${oc.gray[4]};
    text-align: center;
  }
`;

const Space = styled.div`
  display: flex;
  align-self: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

interface Props {}

const Range: React.FC<Props> = () => {
  const [rangeFrom, setRangeFrom] = useRecoilState(RangeFrom);
  const [rangeTo, setRangeTo] = useRecoilState(RangeTo);

  useEffect(() => {
    if (rangeTo.date.getTime() - rangeFrom.date.getTime() < 0) {
      alert('끝 시간이 시작 시간보다 작으면 안됩니다!');
      setRangeFrom({ date: new Date(RangeFromDate()) });
      setRangeTo({ date: new Date() });
    }
  }, [rangeFrom.date, rangeTo.date, setRangeFrom, setRangeTo]);

  return (
    <Container>
      <label>Range</label>
      <DatePicker
        locale="ko"
        startDate={rangeFrom.date}
        selected={rangeFrom.date}
        onChange={(date: any) => setRangeFrom({ date })}
        dateFormat="yyyy, MM dd"
      />
      <Space>~</Space>
      <DatePicker
        locale="ko"
        startDate={rangeTo.date}
        selected={rangeTo.date}
        onChange={(date: any) => setRangeTo({ date })}
        dateFormat="yyyy, MM dd"
      />
    </Container>
  );
};

export default Range;
