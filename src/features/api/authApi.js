import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  // just any identifier name
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/user",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useAddUserMutation, useLoginUserMutation } = authApi;
// first we will create an api and export it(createApi-->authApi)
// ai authApi amader akta hooks dibe ja export korbo. sekhan theke api calling method(addUser), [isLoadin] asob pabo. see where we are using this hook.
// addUser ke jokhon data diye call korbe tokhon sei data query(body)-> body ta pabe. erpore url+method onusare call kore sei data (ja body contain kortese) backend e pathabe.
