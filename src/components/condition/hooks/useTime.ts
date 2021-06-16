import React from 'react';
import { useRecoilState } from 'recoil';
import { Time } from '../../../store';

function useTime() {
  const [time, setTime] = useRecoilState(Time);

  const onToggleTime = (close?: boolean) => {
    close
      ? setTime((prev) => ({ ...prev, visible: false }))
      : setTime((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    time,
    onToggleTime,
    onChangeTime,
  };
}

export default useTime;