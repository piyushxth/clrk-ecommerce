'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewCollection = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: '/client/products/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/client/products/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/client/products/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      image: '/client/products/product4.jpg',
    },
  ];

  return (
    <section className="container py-16">
      <div className="flex justify-between mb-8">
        <h1 className="fw-regular ff-fashionwacks fs-600">New Collection</h1>
        <button className="w-[200px] sm:w-[240px] h-[50px] sm:h-[60px] rounded-[80px] border-[1.5px] border-[#232323]/50 hover:border-[#232323] transition-colors duration-300">
          View Collection
        </button>
      </div>

      <div className="w-full">
        <Swiper
          spaceBetween={40}
          slidesPerView={1.2}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-[350px] h-[350px] bg-gray-100">
                {/* Product content will go here */}
                <div className="w-full h-full flex items-center justify-center">
                  {product.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewCollection;