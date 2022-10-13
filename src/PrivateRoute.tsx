import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from './auth/auth';

interface Props {
  children: ReactNode;
}
const PrivateRoute = ({ children }: Props) => {
  const [user, setUser] = useState<boolean>();
  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated()
      .then((resposta) => setUser(!resposta.data.auth))
      .catch((erro) => {
        console.log(erro);
        navigate('/login');
        setUser(!erro.response.data.auth);
      });
  });
  return user ? <Navigate to="/login" replace={true} /> : children;
};

export default PrivateRoute;
