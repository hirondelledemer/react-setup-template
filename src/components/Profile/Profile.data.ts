import { Gender } from '@src/utils/types/data';

export const GENDER_LABEL = {
  female: 'Female',
  male: 'Male',
  other: 'Other',
} as const satisfies Record<Gender, string>;
