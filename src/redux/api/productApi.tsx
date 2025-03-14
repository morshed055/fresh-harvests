import { baseApi } from './baseApi';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: 'products',
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: ['Product'],
    }),
    getAllProducts: builder.query({
      query: () => 'products',
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
    updateProductById: builder.mutation({
      query: ({ id, ...productData }) => ({
        url: `product/${id}`,
        method: 'PUT',
        body: productData,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation,
} = productApi;