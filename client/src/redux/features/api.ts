import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const memoriesApi = createApi({
  reducerPath: 'memoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = memoriesApi