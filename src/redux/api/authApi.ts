import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "users/register",
        method: "POST",
        body: {
          fullName: userData.fullName,
          email: userData.email,
          password: userData.password,
        },
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    refreshToken: builder.query({
      query: () => "auth/refresh-token",
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useRefreshTokenQuery,
} = authApi;