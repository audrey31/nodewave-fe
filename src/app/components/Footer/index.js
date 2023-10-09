import React from "react";
import Image from "next/image";
import LogoNodewave from "../../../../public/logo-nodewave.png";

import Facebook from "../../../../public/social/facebook.svg";
import Instagram from "../../../../public/social/instagram.svg";
import Linkedin from "../../../../public/social/linkedin.svg";
import Twitter from "../../../../public/social/twitter.svg";
import Youtube from "../../../../public/social/youtube.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="container">
      <div className="flex justify-center text-center flex-col">
        <Image
          src={LogoNodewave}
          className="w-[150px] md:w-[200px] self-center mb-6"
        />

        <h1 className="font-medium mb-6">PT NODEWAVE SOLUSI TEKNOLOGI</h1>

        <p className="font-medium mb-6">
          Graha Pena Surabaya <br /> Jl. Ahmad Yani no. 88 Surabaya <br />
          Phone: +62811258280 <br /> Email : support@nodewave.id
        </p>

        <div className="flex gap-2 justify-center mb-6">
          <Link href="#">
            <Image src={Facebook} />
          </Link>
          <Link href="#">
            <Image src={Twitter} />
          </Link>
          <Link href="#">
            <Image src={Youtube} />
          </Link>
          <Link href="#">
            <Image src={Linkedin} />
          </Link>
          <Link href="#">
            <Image src={Instagram} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
