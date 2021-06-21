import React, { useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import { EndTime, StartTime } from '../store';

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

const Time: React.FC<Props> = () => {
  const [startTime, setStartTime] = useRecoilState(StartTime);
  const [endTime, setEndTime] = useRecoilState(EndTime);

  useEffect(() => {
    if (endTime.date.getTime() - startTime.date.getTime() < 0) {
      alert('끝 시간이 시작 시간보다 작으면 안됩니다!');
      setStartTime({ date: new Date() });
      setEndTime({ date: new Date() });
      return;
    }
  }, [startTime.date, endTime.date, setStartTime, setEndTime]);

  return (
    <Container>
      <label>Time</label>
      <DatePicker
        locale="ko"
        startDate={startTime.date}
        selected={startTime.date}
        onChange={(date: any) => setStartTime({ date })}
        dateFormat="yyyy, MM dd"
      />
      <Space>~</Space>
      <DatePicker
        locale="ko"
        startDate={endTime.date}
        selected={endTime.date}
        onChange={(date: any) => setEndTime({ date })}
        dateFormat="yyyy, MM dd"
      />
    </Container>
  );
};

export default Time;