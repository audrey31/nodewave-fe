import Image from "next/image";
import React from "react";

import WebsitePrice from "../../../../public/website-price.png";
import MobilePrice from "../../../../public/mobile-price.png";
import DiscountLogo from "../../../../public/discount-logo.svg";

function Price() {
  return (
    <div className="mb-16">
      <h1 className="section-title">
        Start Creating Websites or Mobile Apps For You Now
      </h1>

      <div className="container flex justify-center gap-4 sm:gap-16 flex-wrap">
        <div className="bg-white text-black flex flex-col-reverse sm:flex-row w-[525px] rounded-[11px]">
          <div className="flex-1 flex flex-col justify-center text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Website</h2>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Start from</h3>
                <div className="flex flex-col text-[0.9275]">
                  <div className="discount text-[#717171] line-through decoration-[#FF3939]">
                    <span className="relative">
                      Rp, 1.000.000
                      <Image
                        src={DiscountLogo}
                        className="absolute left-[87%] bottom-[15%] inline"
                      />
                    </span>
                  </div>
                  <span className="text-[#333]">Rp, 500.000</span>
                </div>
              </div>
            </div>

            <div className="pb-6 sm:pb-0">
              <button className="btn rounded-[29px] text-white !text-lg !px-12 !py-[0.65rem] font-medium">
                Order Now
              </button>
            </div>
          </div>
          <Image
            src={WebsitePrice}
            className="h-[250px] w-full mb-4 sm:h-auto sm:w-auto sm:mb-0 object-cover sm:max-w-[242px] rounded-t-[10px] sm:rounded-t-0"
          />
        </div>

        <div className="bg-white text-black flex flex-col-reverse sm:flex-row w-[525px] rounded-[11px]">
          <div className="flex-1 flex flex-col justify-center text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Mobile Apps</h2>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Start from</h3>
                <div className="flex flex-col text-[0.9275]">
                  <span className="text-[#333]">Rp, 500.000</span>
                </div>
              </div>
            </div>

            <div className="pb-6 sm:pb-0">
              <button className="btn rounded-[29px] text-white !text-lg !px-12 !py-[0.65rem] font-medium">
                Order Now
              </button>
            </div>
          </div>
          <Image
            src={MobilePrice}
            className="h-[250px] w-full mb-4 sm:h-auto sm:w-auto sm:mb-0 object-cover sm:max-w-[242px] rounded-t-[10px] sm:rounded-t-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
