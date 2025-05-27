import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BestSelling = () => {
  const products = {
    sale: [
      { id: 1, name: "Product 1", price: "$99.99" },
      { id: 2, name: "Product 2", price: "$149.99" },
      { id: 3, name: "Product 3", price: "$79.99" },
      { id: 4, name: "Product 4", price: "$199.99" },
      { id: 5, name: "Product 5", price: "$89.99" },
      { id: 6, name: "Product 6", price: "$129.99" },
      { id: 7, name: "Product 7", price: "$159.99" },
      { id: 8, name: "Product 8", price: "$119.99" },
    ],
    hot: [
      { id: 1, name: "Hot Product 1", price: "$129.99" },
      { id: 2, name: "Hot Product 2", price: "$179.99" },
      { id: 3, name: "Hot Product 3", price: "$149.99" },
      { id: 4, name: "Hot Product 4", price: "$199.99" },
    ],
    newArrivals: [
      { id: 1, name: "New Product 1", price: "$159.99" },
      { id: 2, name: "New Product 2", price: "$189.99" },
      { id: 3, name: "New Product 3", price: "$169.99" },
      { id: 4, name: "New Product 4", price: "$199.99" },
    ],
    accessories: [
      { id: 1, name: "Accessory 1", price: "$49.99" },
      { id: 2, name: "Accessory 2", price: "$39.99" },
      { id: 3, name: "Accessory 3", price: "$59.99" },
      { id: 4, name: "Accessory 4", price: "$69.99" },
    ],
  };

  return (
    <section className="bg-accent-400 py-8 sm:py-16">
      <div className="container">
        <h1 className="fw-regular ff-fashionwacks fs-600 text-center mb-8">
          Best Selling
        </h1>

        <Tabs defaultValue="sale" className="w-full">
          <TabsList className="flex justify-center flex-wrap w-full max-w-[600px] mx-auto mb-8 bg-transparent">
            <TabsTrigger
              value="sale"
              className="fs-400 relative border-none bg-transparent rounded-none shadow-none after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#232323] after:transition-all after:duration-300 data-[state=active]:after:w-[40%]"
            >
              SALE
            </TabsTrigger>
            <TabsTrigger
              value="hot"
              className="fs-400 relative border-none bg-transparent rounded-none shadow-none after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#232323] after:transition-all after:duration-300 data-[state=active]:after:w-[40%] tracking-wide"
            >
              HOT
            </TabsTrigger>
            <TabsTrigger
              value="newArrivals"
              className="fs-400 relative border-none bg-transparent rounded-none shadow-none after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#232323] after:transition-all after:duration-300 data-[state=active]:after:w-[80%] tracking-wide"
            >
              NEW ARRIVALS
            </TabsTrigger>
            <TabsTrigger
              value="accessories"
              className="fs-400 relative border-none bg-transparent rounded-none shadow-none after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#232323] after:transition-all after:duration-300 data-[state=active]:after:w-[80%] tracking-wide"
            >
              ACCESSORIES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sale" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {products.sale.map((product) => (
                <div key={product.id} className="rounded-lg">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="flex flex-col p-3 text-center gap-1">
                    <h3 className="fs-400 fw-medium">{product.name}</h3>
                    <span className="w-full flex justify-center gap-4">
                      <p className="text-sm sm:text-base border-r pr-2">
                        {product.price}
                      </p>
                      <p className="text-sm sm:text-base">{product.price}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hot" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {products.hot.map((product) => (
                <div key={product.id} className="rounded-lg">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="flex flex-col p-3 text-center gap-1">
                    <h3 className="fs-400 fw-medium">{product.name}</h3>
                    <span className="w-full flex justify-center gap-4">
                      <p className="text-sm sm:text-base border-r pr-2">
                        {product.price}
                      </p>
                      <p className="text-sm sm:text-base">{product.price}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="newArrivals" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {products.newArrivals.map((product) => (
                <div key={product.id} className="rounded-lg">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="flex flex-col p-3 text-center gap-1">
                    <h3 className="fs-400 fw-medium">{product.name}</h3>
                    <span className="w-full flex justify-center gap-4">
                      <p className="text-sm sm:text-base border-r pr-2">
                        {product.price}
                      </p>
                      <p className="text-sm sm:text-base">{product.price}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {products.accessories.map((product) => (
                <div key={product.id} className="rounded-lg">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="flex flex-col p-3 text-center gap-1">
                    <h3 className="fs-400 fw-medium">{product.name}</h3>
                    <span className="w-full flex justify-center gap-4">
                      <p className="text-sm sm:text-base border-r pr-2">
                        {product.price}
                      </p>
                      <p className="text-sm sm:text-base">{product.price}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BestSelling;
