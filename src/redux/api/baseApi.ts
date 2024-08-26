import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rental-service-serverside.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
