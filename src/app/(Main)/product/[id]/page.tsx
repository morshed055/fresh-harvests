'use client';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/redux/api/productApi';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import { useGetCategoryByIdQuery } from '@/redux/api/categoryApi';
import Image from 'next/image';
import React, { useState } from 'react';
import ImageSlider from '@/components/shared/ImageSlider';
import Product_card from '@/components/shared/Product_card';

const Page = () => {
  const { id } = useParams();
  const { data: product, isLoading: isProductLoading, error: productError } = useGetProductByIdQuery(id);
  const { data: allProducts, isLoading: isAllProductsLoading, error: allProductsError } = useGetAllProductsQuery({});
  const { data: category, isLoading: isCategoryLoading, error: categoryError } = useGetCategoryByIdQuery(
    product?.data?.categoryId // Fetch category by categoryId
  );
  const [quantity, setQuantity] = useState(1);

  // Handle loading state
  if (isProductLoading || isAllProductsLoading || isCategoryLoading) {
    return <div>Loading...</div>;
  }

//  Handle error state
  if (productError || allProductsError || categoryError) {
    return <div>Error loading data.</div>;
  }

  // Filter related products by categoryId
  const relatedProducts = allProducts?.data?.filter(
    (prod:any) => prod.categoryId === product?.data?.categoryId && prod.id !== id
  );

  return (
    <div>
      <section>
        <div className="max-w-5xl mx-auto p-6">
          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              {/* Replace single image with ImageSlider */}
              <ImageSlider images={product?.data?.images || ['/placeholder.png']} />
            </div>
            <div>
              {/* Display category name instead of categoryId */}
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {category?.data?.categoryName || 'Uncategorized'}
              </span>
              <h1 className="text-2xl font-bold mt-2">{product?.data?.productName}</h1>
              <div className="text-yellow-500 text-sm">
                ★★★★★ <span className="text-gray-500">(5.0 reviews)</span>
              </div>
              <p className="text-orange-600 text-lg font-semibold mt-2">
                ${product?.data?.price}/kg
              </p>
              <p className="text-gray-600 mt-2">{product?.data?.description}</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2">Quantity</span>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
            </div>
          </div>

          {/* Description & Reviews */}
          <div className="mt-8">
            <div className="border-b flex">
              <button className="px-4 py-2 bg-green-100 text-green-800">Description</button>
              <button className="px-4 py-2 text-gray-600">Reviews (1)</button>
            </div>
            <p className="mt-4 text-gray-600">{product?.data?.description}</p>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-xl font-bold">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {relatedProducts?.length > 0 ? (
                relatedProducts.map((prod: any) => (
                  <Product_card key={prod.id} product={prod} />
                ))
              ) : (
                <p>No related products found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;