import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (token) => ({
        url: "/users/me",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ token, updatedUserInfo }) => ({
        url: "/users/me",
        method: "PUT",
        body: updatedUserInfo,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateUserMutation } = userApi;
