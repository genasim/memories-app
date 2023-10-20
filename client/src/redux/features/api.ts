import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostMessage } from '../../common/types/postMessage'

// Define a service using a base URL and expected endpoints
export const memoriesApi = createApi({
  reducerPath: 'memoriesApi',
  tagTypes: ['POSTS'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
  endpoints: (builder) => ({
    getPosts: builder.query<[PostMessage], void>({
        query: () => 'posts/',
        providesTags: ['POSTS'],
    }),
    createPost: builder.mutation<PostMessage, PostMessage>({
        query: (body) => ({
            url: 'posts/',
            method: 'POST',
            body 
        }),
        invalidatesTags: ['POSTS'],
                
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useCreatePostMutation } = memoriesApi