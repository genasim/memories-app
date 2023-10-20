import { configureStore } from '@reduxjs/toolkit'
import { memoriesApi } from './features/api'

export const store = configureStore({
  reducer: {
    [memoriesApi.reducerPath]: memoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(memoriesApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
