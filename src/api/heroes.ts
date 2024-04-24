import axios from 'axios';

import type { Hero, HeroProfile } from '@/types/hero';

const BASE_URL = 'https://hahow-recruit.herokuapp.com';
const heroesApi = axios.create({
  baseURL: `${BASE_URL}/heroes`,
});

// TODO error handling
export const apiGetHeroList = async (): Promise<Hero[]> => {
  const res = await heroesApi.get('/');
  return res.data;
};

export const apiGetHero = async (id: string): Promise<Hero> => {
  const res = await heroesApi.get(`/${id}`);
  return res.data;
};

export const apiGetHeroProfile = async (id: string): Promise<HeroProfile> => {
  const res = await heroesApi.get(`/${id}/profile`);
  return res.data;
};

export const apiPatchHeroProfile = async (
  id: string,
  data: HeroProfile,
): Promise<string> => {
  const res = await heroesApi.patch(`/${id}/profile`, data);
  return res.data;
};
