import { baseApi } from './baseApi';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: 'category',
        method: 'POST',
        body: categoryData,
      }),
      invalidatesTags: ['Category'],
    }),
    getAllCategories: builder.query({
      query: () => 'category',
      providesTags: ['Category'],
    }),
    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
      providesTags: ['Category'],
    }),
    updateCategoryById: builder.mutation({
      query: ({ id, ...categoryData }) => ({
        url: `category/${id}`,
        method: 'PUT',
        body: categoryData,
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
  useDeleteCategoryByIdMutation,
} = categoryApi;