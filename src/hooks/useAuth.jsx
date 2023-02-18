import { useEffect } from 'react';
import cookie from 'js-cookie';

const useAuth = (href) => {

  const checkIfUserIsAuthenticated = () => {
    // If there is a cookie with a valid JWT exists then the user is authenticated.
    if(cookie.get('token')){
      return true;
    } else{
      return false;
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      // Check if the user is authenticated
      const isAuthenticated = await checkIfUserIsAuthenticated();

      if (!isAuthenticated) {
        // If the user is not authenticated, redirect them to the log in
        window.location.href = "/sign_in";
      }
    };

    checkAuth();
  }, [href]);
};

export default useAuth;

