"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import RayuMotor from "../../../../public/rayu-motor.png";
import Jasabung from "../../../../public/jasabung.png";

function Works() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-16">
      <h1 className="section-title">Our Works</h1>

      <div className="container">
        <Slider {...carouselSettings}>
          <div>
            <div className="flex justify-center">
              <div className="bg-works-2 bg-cover bg-no-repeat w-[650px] h-[400px] rounded-[14px] flex justify-center items-center px-4">
                <div className="flex gap-4 flex-col md:flex-row">
                  <Image src={Jasabung} className="w-[400px] flex-1" />
                  <div className="flex-[0.5]">
                    <h3 className="text-center mt-2 text-xl font-semibold mb-2">
                      Jasabung
                    </h3>
                    <p className="text-base !text-[0.95rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="bg-works-1 bg-cover bg-no-repeat w-[650px] h-[400px] rounded-[14px] flex justify-center items-center px-4">
                <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                  <Image src={RayuMotor} className="w-[400px] flex-1" />
                  <div className="flex-[0.5]">
                    <h3 className="text-center mt-2 text-xl font-semibold mb-2">
                      Rayu Motor
                    </h3>
                    <p className="text-base !text-[0.95rem]">
                      AC Service Workshop that has implemented online
                      registration to make it easier for consumers, mechanics,
                      and sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Works;
