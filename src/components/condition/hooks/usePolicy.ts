import React from 'react';
import { useRecoilState } from 'recoil';
import { Policy } from '../../../store';

function usePolicy() {
  const [policy, setPolicy] = useRecoilState(Policy);

  const onTogglePolicy = (close?: boolean) => {
    close
      ? setPolicy((prev) => ({ ...prev, visible: false }))
      : setPolicy((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicy((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    policy,
    onTogglePolicy,
    onChangePolicy,
  };
}

export default usePolicy;