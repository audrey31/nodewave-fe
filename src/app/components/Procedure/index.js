import Image from "next/image";
import React from "react";
import Chat from "../../../../public/chat.png";

function Procedure() {
  return (
    <div className="bg-procedure bg-no-repeat pb-10">
      <h1 className="section-title pb-12 !pt-6 !mb-0">How We Work</h1>

      <div className="flex justify-center max-w-[650px] mx-auto">
        <div className="bg-procedure-content bg-no-repeat bg-cover rounded-[10px] gap-12 flex p-6 mx-6">
          <Image src={Chat} className="max-w-[160px] md:max-w-[250px]" />
          <div>
            <span className="font-semibold mb-2 block pt-4">Estimate</span>
            <p className="text-sm md:text-base">
              Estimate the cost of creating your application with us. Pricing is
              transparent at the start with a gradual payment method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Procedure;
