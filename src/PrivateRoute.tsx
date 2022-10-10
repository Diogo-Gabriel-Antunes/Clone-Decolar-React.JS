import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth/auth';

interface Props {
  children: ReactNode;
}
const PrivateRoute = ({ children }: Props) => {
  const [user, setUser] = useState<boolean>();
  useEffect(() => {
    isAuthenticated()
      .then((resposta) => setUser(!resposta.data.auth))
      .catch((erro) => {
        console.log(erro);
        setUser(true);
      });
  });
  return user ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
