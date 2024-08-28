// bikesApi.ts

import { baseApi } from "../../api/baseApi";

export const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => "/bikes",
      providesTags: ["Bikes"],
    }),

    getBikeById: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
    }),

    updateBike: builder.mutation({
      query: (bike) => ({
        url: `/bikes/${bike.id}`,
        method: "PUT",
        body: bike,
      }),
      invalidatesTags: ["Bikes"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetBikeByIdQuery,
  useUpdateBikeMutation,
} = bikesApi;
