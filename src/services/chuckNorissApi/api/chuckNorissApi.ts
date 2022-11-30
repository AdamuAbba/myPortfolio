import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL: string = 'https://api.chucknorris.io/jokes';

const chuckNorissApi = createApi({
  reducerPath: 'chuckNorissApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});

export default chuckNorissApi;
