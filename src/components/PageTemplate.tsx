import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Loading } from '../store';
import Modal from './Modal';

// Styles
const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  const [loading] = useRecoilState(Loading);

  return (
    <>
      <Main>{children}</Main>

      <Modal visible={loading} title="데이터 로딩 중..." />
    </>
  );
};

export default PageTemplate;
