import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8001' }),
    tagTypes: ['Task', 'User'],
    endpoints: builder => ({})
})