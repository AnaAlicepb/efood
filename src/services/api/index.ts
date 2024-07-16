import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../../model/Restaurant/Restaurant'
type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
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
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetAllRestaurantsQuery,
  useGetRestaurantByIdQuery,
  usePurchaseMutation
} = api

export default api
