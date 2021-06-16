import React from 'react';
import { useRecoilState } from 'recoil';
import { Matches } from '../../../store';

function useMatches() {
  const [matches, setMatches] = useRecoilState(Matches);

  const onToggleMatches = (close?: boolean) => {
    close
      ? setMatches((prev) => ({ ...prev, visible: false }))
      : setMatches((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeMatches = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatches((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    matches,
    onToggleMatches,
    onChangeMatches,
  };
}

export default useMatches;