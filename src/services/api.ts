import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/Restaurante'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurantes: builder.query<Restaurante[], void>({
            query: () => '/restaurantes'
        }),
        getRestaurante: builder.query<Restaurante, number>({
            query: (id) => `/restaurantes/${id}`
        })
    })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api

export default api
