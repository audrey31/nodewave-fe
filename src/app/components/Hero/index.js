import React from "react";
import Image from "next/image";
import HeadLogo from "../../../../public/head-idea.png";
import CodeLogo from "../../../../public/code-bold.png";

function Hero() {
  return (
    <div className="bg-hero bg-right bg-no-repeat h-screen flex items-center bg-cover">
      <div className="container">
        <div className="relative">
          <h1 className="text-xl sm:text-3xl md:text-[2.3rem] tracking-tight font-medium relative md:leading-snug mb-2">
            <Image
              src={CodeLogo}
              className="absolute bottom-[95%] md:right-[98%] inline w-[35px] md:w-[40]"
            />
            Make Your Own <br className="hidden md:block" /> Website and Mobile
            Application <br className="hidden md:block" /> With Nodewave
            <span>
              <Image src={HeadLogo} className="inline w-[42px] md:w-[55px]" />
            </span>
          </h1>
          <button className="btn rounded-[41px] mb-5">Get Started Now</button>
          <p className="text-sm md:text-base font-light">
            Create Mobile Applications and Websites for Companies or Your
            Business <br className="hidden md:block" /> Have a transparent
            pricing, easy and straightforward development process
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
