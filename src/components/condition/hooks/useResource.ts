import React from 'react';
import { useRecoilState } from 'recoil';
import { Resource } from '../../../store';

function useResource() {
  const [resource, setResource] = useRecoilState(Resource);

  const onToggleResource = (close?: boolean) => {
    close
      ? setResource((prev) => ({ ...prev, visible: false }))
      : setResource((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeResource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResource((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    resource,
    onToggleResource,
    onChangeResource,
  };
}

export default useResource;