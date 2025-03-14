import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api-fresh-harvest.code-commando.com/api/v1';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User', 'Auth', 'Category', 'Product'],
  endpoints: () => ({}),
});