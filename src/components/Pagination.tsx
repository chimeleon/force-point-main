import React from 'react';
import styled from 'styled-components';
import PageButton from './PageButton';

// Styles
const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  .now {
    display: flex;
    align-items: center;
  }
`;

interface Props {
  page: number;
  lastPage: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<Props> = ({ page, lastPage, onPrev, onNext }) => {
  return (
    <Container>
      <PageButton
        disabled={page === 1}
        onClick={page === 1 ? undefined : onPrev}
      >
        이전 페이지
      </PageButton>
      <div className="now">{page} 페이지</div>
      <PageButton
        disabled={page === lastPage || lastPage === 0}
        onClick={page === lastPage ? undefined : onNext}
      >
        다음 페이지
      </PageButton>
    </Container>
  );
};

export default Pagination;