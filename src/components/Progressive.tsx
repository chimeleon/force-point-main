import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  width: 100%;
  height: 4px;
  background: ${oc.gray[6]};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .progress {
    height: 100%;
    background: ${oc.indigo[7]};
  }
`;

interface Props {}

const Progressive: React.FC<Props> = () => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;

    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Container ref={progressRef}>
      <div className="progress" style={{ width: width + '%' }} />
    </Container>
  );
};

export default Progressive;
