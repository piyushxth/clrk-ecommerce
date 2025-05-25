'use client';

import Image from 'next/image';

const BrandPartners = () => {
  const brands = [
    {
      name: 'Nike',
      logo: '/client/brandPartners/nike.svg',
    },
    {
      name: 'Adidas',
      logo: '/client/brandPartners/adidas.svg',
    },
    {
      name: 'Puma',
      logo: '/client/brandPartners/puma.svg',
    },
    {
      name: 'Under Armour',
      logo: '/client/brandPartners/under-armour.svg',
    },
    {
      name: 'New Balance',
      logo: '/client/brandPartners/new-balance.svg',
    },
  ];

  return (
    <section className="w-full bg-primary py-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-40"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners; 