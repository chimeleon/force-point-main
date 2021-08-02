import React from 'react';
import { useRecoilState } from 'recoil';
import { Agent } from '../../../store';

function useAgent() {
  const [agent, setAgent] = useRecoilState(Agent);

  const onToggleAgent = (close?: boolean) => {
    close
      ? setAgent((prev) => ({ ...prev, visible: false }))
      : setAgent((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeAgent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgent((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    agent,
    onToggleAgent,
    onChangeAgent,
    setAgent
  };
}

export default useAgent;