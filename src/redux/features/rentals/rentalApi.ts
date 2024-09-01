import baseApi from "../../api/baseApi";

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRentals: builder.query({
      query: () => ({
        url: "/rentals",
      }),
      providesTags: ["Rental"],
    }),

    // Create a new rental
    createRental: builder.mutation({
      query: (rentalData: {
        bikeId: string;
        startTime: string;
        transactionId?: string;
        userId: string;
        amount: number;
        email: string;
      }) => ({
        url: "/rentals",
        method: "POST",
        body: rentalData,
      }),
      invalidatesTags: ["Rental"],
    }),

    // Mark a rental as paid
    payForRental: builder.mutation({
      query: (rentalId: string) => ({
        url: `/rentals/${rentalId}/pay`,
        method: "PUT",
      }),
      invalidatesTags: ["Rental"],
    }),
  }),
});

export const {
  useGetRentalsQuery,
  useCreateRentalMutation,
  usePayForRentalMutation,
} = rentalApi;
