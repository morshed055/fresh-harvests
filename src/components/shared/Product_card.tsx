import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link'; 


interface Product {
  id: string;
  images: string[];
  productName: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const Product_card: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product?.id);

  return (
    <div>
      <div className="w-[282px] h-[360px] p-4 rounded-lg text-center mx-2 relative">
        {/* Wrap the image and product name with Link */}
        <Link href={`/product/${product?.id}`} passHref>
          <div className="cursor-pointer">
            <Image
              src={product?.images[0] || '/placeholder.png'} 
              alt={product?.productName || 'Product Image'}
              width={300}
              height={208}
              className="rounded-lg h-[200px] w-[200px] mx-auto"
              priority // Prioritize loading the image
            />
            <h3 className="text-lg font-semibold mt-2">{product?.productName}</h3>
            <p className="text-gray-600">
              <span>$</span> {product?.price}/kg
            </p>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <div className="flex flex-col justify-center">
          <Button
            className="hover:bg-[#749B3F] rounded-lg mt-2 bg-white text-[#231F20] transition-colors py-6 w-[258px] text-center border-2 text-lg font-normal font-Rubik"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product_card;