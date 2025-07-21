import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './use-local-storage';
import { Profile } from '@src/utils/types/data';
import { useAuth } from './use-auth';

const URL = 'https://dummyjson.com/auth/me';

const fetchProfile = async (token: string) => {
  const res = await fetch(URL, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    if (res.status === 401) {
      throw new Error('unauthorized');
    }
    throw new Error('oops, something went wrong');
  }

  return res.json();
};

export const useProfile = () => {
  const [token] = useLocalStorage<string>(TOKEN_KEY, undefined);
  const { setToken } = useAuth();

  const query = useQuery<Profile>({
    queryKey: ['profile'],
    queryFn: () => fetchProfile(token),
    enabled: !!token,
  });

  if (query.error && query.error.message === 'unauthorized') {
    setToken(undefined);
  }

  return query;
};
