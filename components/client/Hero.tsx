import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[450px] flex flex-col">
      {/* Grid content */}
      <div className="absolute inset-0 z-0 h-full">
        <div className="grid grid-cols-2 h-full">
          <div className="bg-accent-300 h-full "></div>
          <div className="bg-accent-400 h-full"> 
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="relative flex flex-1 flex-col h-full w-full container">
        <Navbar />
        <HeroSwiper />

        <div className="flex items-end justify-center  flex-1">
          <div className="relative w-[35%] lg:w-[60%] min-w-[100px] max-w-[420px] aspect-[210/363] z-10">
            <Image
              src="/client/hero/414.png"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
          <div className=" absolute top-0 left-0 fw-regular h-full w-full">
            <div className="relative  flex flex-col  w-full h-full justify-center gap-2">
              <div className="hidden absolute top-30 left-30 lg:flex items-center z-10 gap-4 p-2 w-full max-w-xs bg-accent-500">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/client/hero/hero2.png"
                    alt="hero"
                    width={90}
                    height={90}
                    className="h-[90px] w-[90px] object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-semibold leading-snug">
                    Solides Kordelzug-Satin-Minikleid
                  </h2>
                  <p className="text-sm sm:text-base font-medium mt-1">
                    $23,423
                  </p>
                </div>
              </div>
              <div className="hidden absolute bottom-50 right-55 lg:flex items-center z-10 gap-4 p-2 w-full max-w-xs bg-white/30 text-white">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/client/hero/hero2.png"
                    alt="hero"
                    width={90}
                    height={90}
                    className="h-[90px] w-[90px] object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-semibold leading-snug">
                    Solides Kordelzug-Satin-Minikleid
                  </h2>
                  <p className="text-sm sm:text-base font-medium mt-1">
                    $23,423
                  </p>
                </div>
              </div>
              <h1 className="whitespace-nowrap fs-900 leading-none ff-fashionwacks text-center">
                New Fashion
              </h1>
              <p className=" fs-200 md:fs-300 w-[50%] md:w-[40%] fw-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                illum culpa voluptatum magnam
                <span className="hidden md:inline">
                  &nbsp;hic ullam dolor, quae fugit quia repellat atque qui
                  soluta, inventore eum vero, repudiandae eius harum sequi.
                </span>
              </p>

              <button className="uppercase mt-2 px-3 lg:px-6 py-2 bg-accent-400 self-start text-white fw-medium md:fw-bold fs-200 lg:fs-400">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
