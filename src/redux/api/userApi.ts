import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'users/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getAllUsers: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: 'users/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserById: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetAllUsersQuery,
  useUpdateProfileMutation,
  useUpdateUserByIdMutation,
} = userApi;