import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  h2 {
    animation: blink-effect 1s step-end infinite;
  }
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;

  @keyframes slideUpFromBottom {
    0% {
      transform: translateY(70%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

interface Props {
  visible: boolean;
  title: string;
}

const Modal: React.FC<Props> = ({ visible, title }) => {
  if (!visible) return null;

  return (
    <Container>
      <Content>
        <h2>{title}</h2>
      </Content>
    </Container>
  );
};

export default Modal;
