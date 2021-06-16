import React from 'react';
import { useRecoilState } from 'recoil';
import { Person } from '../../../store';

function usePerson() {
  const [person, setPerson] = useRecoilState(Person);

  const onTogglePerson = (close?: boolean) => {
    close
      ? setPerson((prev) => ({ ...prev, visible: false }))
      : setPerson((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    person,
    onTogglePerson,
    onChangePerson,
  };
}

export default usePerson;