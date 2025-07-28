import { PROFILE } from '@src/utils/consts/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './use-auth';
import { InputProps, UserData } from '@src/utils/types/data';

const URL = `${process.env.API_BASE_URL}/auth/login`;

const fetchLogin = async (params: InputProps): Promise<UserData> => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    throw new Error('Username or password is not valid');
  }

  return res.json();
};

export const useLogin = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  return useMutation<UserData, Error, InputProps>({
    mutationFn: (input: InputProps) => fetchLogin(input),
    onSuccess: async (data: UserData) => {
      setToken(data.accessToken);
      navigate(PROFILE);
    },
  });
};
