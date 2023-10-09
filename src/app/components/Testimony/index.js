"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimony() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="container mb-6">
      <h2 className="font-medium text-xl mb-4">Testimony</h2>
      <Slider {...carouselSettings}>
        <div className="pr-2 md:pr-12 font-medium">
          <div className="bg-white py-2 px-3 rounded-[6px] h-full">
            <p className="text-[#333333] text-sm text-[0.975rem] mb-3">
              Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang
              paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu
              udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih
              Nodewave.
            </p>

            <span className="text-primary">Ahmad Prasetyo</span>
          </div>
        </div>
        <div className="pr-2 md:pr-12 font-medium">
          <div className="bg-white py-2 px-3 rounded-[6px] h-full">
            <p className="text-[#333333] text-sm text-[0.975rem] mb-3">
              Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
              ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
              tinggal cerita aja lewat zoom maunya buat website seperti apa,
              langsung dibuatin dengan cepat sama Nodewave.
            </p>

            <span className="text-primary">Laras Ratnadewi</span>
          </div>
        </div>
        <div className="pr-2 md:pr-12 font-medium">
          <div className="bg-white py-2 px-3 rounded-[6px] h-full">
            <p className="text-[#333333] text-sm text-[0.975rem] mb-3">
              Yang paling keren sih source codenya sekalian dikasih, pas pula
              bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2
              baru untuk startup gw. Thanks a lot Nodewave supportnya!!
            </p>

            <span className="text-primary">Yusuf Uwais</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimony;
