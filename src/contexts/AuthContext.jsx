import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { createContext, useEffect, useState } from 'react';

import { getProfileUserService, loginService } from '../services/users';

import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

import { getToken } from '../utils/getToken';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getProfileUserService();
        setAuthUser(data.user);
      } catch (error) {
        swal('Ha ocurrido un error', error.message);
      } finally {
        setLoading(false);
      }
    };
    const token = getToken();
    if (token) fetchUser();
  }, [isAuthenticated]);

  const authLogin = async (loginData) => {
    try {
      setLoading(true);
      const data = await loginService(loginData);
      if (data.status === 'error') {
        throw new Error(data.message);
      } else {
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, data.data.token);
        setIsAuthenticated(true);
        return data;
      }
    } catch (error) {
      swal('Ha ocurrido un error', error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const authLogout = () => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
    setIsAuthenticated(false);
    setAuthUser(null);
    swal('Has cerrado sesión');
  };

  return (
    <AuthContext.Provider value={{ authUser, authLogin, authLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
