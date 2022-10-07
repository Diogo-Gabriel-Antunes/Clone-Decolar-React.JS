import axios from 'axios';
import nookies from 'nookies';

export const isAuthenticated = async () => {
  const token = nookies.get().TOKEN_REFRESH;
  console.log(token);
  const promessa = await axios.post(
    `http://localhost:8080/usuarios/atualiza_token`,
    {
      refreshToken: token,
    }
  );
  console.log(token);
  return promessa;
};
