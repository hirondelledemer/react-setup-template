export const GENDER = ['female', 'male', 'other'] as const;

export type Gender = (typeof GENDER)[number];

export interface Profile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
}

export interface InputProps {
  username: string;
  password: string;
}

export interface UserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'female' | 'male' | 'other';
  image: string;
  accessToken: string;
  refreshToken: string;
}
