import jsCookie from 'js-cookie';
import { useEffect } from 'react';

function useAuth() {
  useEffect(() => {
    const user = jsCookie.get('JSESSIONID');

    if (!user) {
      // document.location.href = '/';
    } else {
      localStorage.setItem('jsessionId', user);
    }
  }, []);
}

export default useAuth;
