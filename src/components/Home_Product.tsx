'use client';
import React, { useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Product_card from './shared/Product_card';

const Home_Product = () => {
  const { data: category, error: categoryError, isLoading: isCategoryLoading } = useGetAllCategoriesQuery({});
  const { data: product, error: productError, isLoading: isProductLoading } = useGetAllProductsQuery({});
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter
  console.log(product);

  // Set the default active tab to "ALL"
  useEffect(() => {
    if (category?.data?.length > 0 && !activeTab) {
      setActiveTab('ALL');
    }
  }, [category, activeTab]);

  // Handle loading state
  if (isCategoryLoading || isProductLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (categoryError || productError) {
    return <div>Error loading data.</div>;
  }

  // Filter products by the active category or show all products if "ALL" is selected
  const filteredProducts = activeTab === 'ALL'
    ? product?.data
    : product?.data.filter((prod: any) => prod.categoryId === activeTab);

  // Show only the first 6 products
  const displayedProducts = filteredProducts?.slice(0, 8);

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
          {/* Tab Bar */}
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            {/* "ALL" Tab */}
            <button
              key="ALL"
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-2 text-sm font-medium border rounded-md ${
                activeTab === 'ALL'
                  ? 'text-white border-b-2 border-[#749B3F] bg-[#749B3F]' // Active tab styles
                  : 'text-gray-500 hover:text-gray-700' // Inactive tab styles
              }`}
            >
              ALL
            </button>

            {/* Category Tabs */}
            {category?.data.map((cat: any) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-sm font-medium border rounded-md ${
                  activeTab === cat.id
                    ? ' border-b-2 border-[#749B3F] bg-[#749B3F] text-white' // Active tab styles
                    : 'text-gray-500 hover:text-gray-700' // Inactive tab styles
                }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab && (
              <div>
                
                {displayedProducts?.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
                    {displayedProducts.map((prod: any, index: number) => (
                   
                      <>
                      <Product_card product={prod} />
                      </>
                    ))}
                  </div>
                ) : (
                  <p className="text-center">No products found.</p>
                )}

                {/* Show More Button */}
                {filteredProducts?.length > 6 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => router.push('/product')} // Redirect to /products route
                      className="text-[#749B3F] border-2  rounded-lg hover:bg-[#FF6A1A] hover:text-white transition-colors font-semibold text-lg w-[203px] h-[53px]"
                    >
                      See All Products
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Product;