import React from 'react';
import { useRecoilState } from 'recoil';
import { Application } from '../../../store';

function useApplication() {
  const [application, setApplication] = useRecoilState(Application);

  const onToggleApplication = (close?: boolean) => {
    close
      ? setApplication((prev) => ({ ...prev, visible: false }))
      : setApplication((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeApplication = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplication((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    application,
    onToggleApplication,
    onChangeApplication,
  };
}

export default useApplication;