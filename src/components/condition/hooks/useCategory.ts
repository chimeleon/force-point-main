import React from 'react';
import { useRecoilState } from 'recoil';
import { Category } from '../../../store';

function useCategory() {
  const [category, setCategory] = useRecoilState(Category);

  const onToggleCategory = (close?: boolean) => {
    close
      ? setCategory((prev) => ({ ...prev, visible: false }))
      : setCategory((prev) => ({ ...prev, visible: !prev.visible }));
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((prev) => ({ ...prev, value: e.target.value }));
  };

  return {
    category,
    onToggleCategory,
    onChangeCategory,
  };
}

export default useCategory;