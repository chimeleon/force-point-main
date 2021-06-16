import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AuthUser } from '../store';

function useAuth() {
  const [, setAuthUser] = useRecoilState(AuthUser);

  const handle = () => {
    localStorage.removeItem('jsessionId');
  }

  useEffect(() => {
    const token = localStorage.getItem('jsessionId');

    if (!token) {
      document.location.href = '/customLogin';
    } else {
      setAuthUser(token);
    }
  },[setAuthUser])

  useEffect(() => {
    window.addEventListener('beforeunload', handle);

    return () => {
      window.removeEventListener('beforeunload', handle);
    };
  }, []);
}

export default useAuth;