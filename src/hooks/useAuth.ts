import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AuthUser } from '../store';

function useAuth() {
  const [, setAuthUser] = useRecoilState(AuthUser);
  const [time, setTime] = useState(0);

  const LeaveOnPage = () => {
    localStorage.removeItem('jsessionId');
  }

  const onTimeReset = () => {
    setTime(0);
  }

  const onLogout = () => {
    localStorage.removeItem('jsessionId');
    document.location.href = '/';
  }

  useEffect(() => {
    const tick = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    if (time > 60* 20) {
      onLogout();
    }
    
    return () => clearTimeout(tick);
  },[time])

  useEffect(() => {
    const token = localStorage.getItem('jsessionId');

    if (!token) {
      document.location.href = '/customLogin';
    } else {
      setAuthUser(token);
    }
  },[setAuthUser])

  useEffect(() => {
    window.addEventListener('beforeunload', LeaveOnPage);
    window.addEventListener('mousemove', onTimeReset);
    window.addEventListener('mousedown', onTimeReset)
    window.addEventListener('keypress', onTimeReset);

    return () => {
      window.removeEventListener('beforeunload', LeaveOnPage);
      window.removeEventListener('mousemove', onTimeReset);
      window.removeEventListener('mousedown', onTimeReset);
      window.removeEventListener('keypress', onTimeReset);
    };
  }, []);

  return {
    onLogout,
  };
}

export default useAuth;