import chuckNorissApi from 'services/chuckNorissApi/api';
import { CheckNorrisResponse } from './types';

const devEndpoints = chuckNorissApi.injectEndpoints({
  endpoints: (builder) => ({
    getDevJokes: builder.query<CheckNorrisResponse, void>({
      query: () => `random?category=dev`,
    }),
  }),
});

export const { useGetDevJokesQuery } = devEndpoints;
