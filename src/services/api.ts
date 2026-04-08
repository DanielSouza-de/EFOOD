import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/Restaurante'

type PurchaseRequest = {
    products: {
        id: number
        price: number
    }[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

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
        }),

        purchase: builder.mutation<PurchaseResponse, PurchaseRequest>({
            query: (body) => ({
                url: '/checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantesQuery,
    useGetRestauranteQuery,
    usePurchaseMutation
} = api

export default api
