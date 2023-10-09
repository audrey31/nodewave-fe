import Image from "next/image";
import React from "react";
import MobileAppsImg from "../../../../public/apps-design.svg";
import MultiMobileImg from "../../../../public/multi-mobiles.png";
import { FaArrowRight } from "react-icons/fa6";

function Products() {
  return (
    <div className="mb-16">
      <h1 className="section-title">Our Product</h1>

      <div className="flex flex-col md:flex-row container gap-6">
        <div className="flex flex-col gap-6 items-center">
          <div className="card-container w-full py-4 sm:py-0 sm:h-[180px] md:w-[428px] md:h-[217px] bg-white hover:outline-primary hover:outline-2 hover:outline hover:cursor-pointer text-black rounded-[24px] flex justify-center items-center">
            <div className="flex items-center gap-4 w-[80%]">
              <Image src={MobileAppsImg} width="60" />
              <div>
                <h3 className="font-rubik font-medium text-lg">Mobile Apps</h3>
                <p className="font-roboto text-[#555555] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <FaArrowRight className="text-xl self-end text-[#FFB347]" />
            </div>
          </div>
          <div className="card-container w-full py-4 sm:py-0 sm:h-[180px] md:w-[388px] md:h-[174px] bg-black hover:cursor-pointer border-2 border-white hover:border-primary text-white rounded-[24px] flex justify-center items-center">
            <div className="flex items-center gap-4 w-[80%]">
              <Image src={MobileAppsImg} width="60" />
              <div>
                <h3 className="font-rubik font-medium text-lg">Website</h3>
                <p className="font-roboto text-white text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <FaArrowRight className="text-xl self-end text-[#FFB347]" />
            </div>
          </div>
        </div>
        <div className="bg-white text-black rounded-[24px] px-10 py-9 flex flex-col items-center flex-1 justify-center">
          <Image src={MultiMobileImg} className="mb-4" />
          <div className="text-center ">
            <h3 className="font-rubik text-2xl font-medium mb-2">
              Mobile Apps
            </h3>
            <p className="text-[#555555] font-roboto mb-6 text-sm md:text-base">
              Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
              fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
              Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan
              fitur GPS.
            </p>
          </div>
          <button className="btn rounded-[8px] shadow-md text-white font-medium">
            Pelajari Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
