import React from 'react';
import { useRecoilValue } from 'recoil';
import useMain from '../../../hooks/useMain';
import { Page } from '../../../store';
import Pagination from '../../Pagination';

interface Props {}

const ContentFooter: React.FC<Props> = () => {
  const page = useRecoilValue(Page);
  const { onPrevPage, onNextPage } = useMain();

  return (
    <Pagination
      page={page.currentPage}
      lastPage={page.lastPage}
      onPrev={onPrevPage}
      onNext={onNextPage}
    />
  );
};

export default ContentFooter;