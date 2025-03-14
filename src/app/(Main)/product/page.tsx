'use client';
import React, { useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Product_card from '@/components/shared/Product_card';

const page = () => {
  const { data: category, error: categoryError, isLoading: isCategoryLoading } = useGetAllCategoriesQuery({});
  const { data: product, error: productError, isLoading: isProductLoading } = useGetAllProductsQuery({});
  const router = useRouter(); // Initialize useRouter
  console.log(product);

  // Handle loading state
  if (isCategoryLoading || isProductLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (categoryError || productError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-[#749B3F] text-shadow bg-[rgba(116,155,63,0.1)] inline">
          Our Products
        </h3>
        <h1 className="text-[#212337] font-rubik font-medium text-[48px] leading-[90px] tracking-tight">
          Our Fresh Products
        </h1>
        <p className="text-sm tracking-tight leading-6">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, <br /> vegetables, and salad ingredients.
        </p>
      </div>
      <div className="flex justify-center mt-20">
        <div className="p-6 w-full max-w-7xl">
          {/* Product Cards */}
          <div className="mt-4">
            {product?.data?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {product.data.map((prod: any, index: number) => (
                  <Product_card key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <p className="text-center">No products found.</p>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;