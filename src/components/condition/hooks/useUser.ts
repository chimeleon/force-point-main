import React from 'react';
import { useRecoilState } from 'recoil';
import { User } from '../../../store';

function useUser() {
  const [user, setUser] = useRecoilState(User);

  const onToggleUser = (close?: boolean) => {
    close
      ? setUser((prev) => ({ ...prev, visible: false }))
      : setUser((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    user,
    onToggleUser,
    onChangeUser,
  };
}

export default useUser;