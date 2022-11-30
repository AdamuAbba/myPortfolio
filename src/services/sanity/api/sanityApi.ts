import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL: string = '';

const sanityApi = createApi({
  reducerPath: 'sanityApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});

export default sanityApi;
