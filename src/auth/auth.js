import axios from 'axios';
import nookies from 'nookies';
import { useEffect, useState } from 'react';

export const isAuthenticated = () => {
  const token = nookies.get().TOKEN;

  return axios.post(`http://localhost:8080/usuarios/autenticado`, {
    token: token,
  });
};
