import React, { useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import { EndAgentTime, StartAgentTime } from '../store';

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

const AgentTime: React.FC<Props> = () => {
  const [startAgentTime, setStartAgentTime] = useRecoilState(StartAgentTime);
  const [endAgentTime, setEndAgentTime] = useRecoilState(EndAgentTime);

  useEffect(() => {
    if (endAgentTime.date.getTime() - startAgentTime.date.getTime() < 0) {
      alert('끝 시간이 시작 시간보다 작으면 안됩니다!');
      setStartAgentTime({ date: new Date() });
      setEndAgentTime({ date: new Date() });
      return;
    }
  }, [
    startAgentTime.date,
    endAgentTime.date,
    setStartAgentTime,
    setEndAgentTime,
  ]);

  return (
    <Container>
      <label>Agent Time</label>
      <DatePicker
        locale="ko"
        startDate={startAgentTime.date}
        selected={startAgentTime.date}
        onChange={(date: any) => setStartAgentTime({ date })}
        dateFormat="yyyy, MM dd"
      />
      <Space>~</Space>
      <DatePicker
        locale="ko"
        startDate={endAgentTime.date}
        selected={endAgentTime.date}
        onChange={(date: any) => setEndAgentTime({ date })}
        dateFormat="yyyy, MM dd"
      />
    </Container>
  );
};

export default AgentTime;