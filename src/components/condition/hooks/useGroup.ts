import React from 'react';
import { useRecoilState } from 'recoil';
import { Group } from '../../../store';

function useGroup() {
  const [group, setGroup] = useRecoilState(Group);

  const onToggleGroup = (close?: boolean) => {
    close
      ? setGroup((prev) => ({ ...prev, visible: false }))
      : setGroup((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroup((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    group,
    onToggleGroup,
    onChangeGroup,
  };
}

export default useGroup;