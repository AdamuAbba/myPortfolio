import api from 'services/api';
import { CheckNorrisResponse } from './types';

const dev = api.injectEndpoints({
  endpoints: (builder) => ({
    getDevJokes: builder.query<CheckNorrisResponse, void>({
      query: () => `random?category=dev`,
    }),
  }),
});

export const { useGetDevJokesQuery } = dev;
