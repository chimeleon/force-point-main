import React from 'react';
import { useRecoilState } from 'recoil';
import { AgentTime } from '../../../store';

function useAgentTime() {
  const [agentTime, setAgentTime] = useRecoilState(AgentTime);

  const onToggleAgentTime = (close?: boolean) => {
    close
      ? setAgentTime((prev) => ({ ...prev, visible: false }))
      : setAgentTime((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeAgentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgentTime((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    agentTime,
    onToggleAgentTime,
    onChangeAgentTime,
  };
}

export default useAgentTime;