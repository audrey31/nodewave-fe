import Image from "next/image";
import React from "react";

import OnlineAttendanceLogo from "../../../../public/applications/online-attendance.svg";
import SportsCenterLogo from "../../../../public/applications/sports-center.svg";
import BookingLogo from "../../../../public/applications/booking.svg";
import EcommerceLogo from "../../../../public/applications/e-commerce.svg";
import CompanyProfileLogo from "../../../../public/applications/company-profile.svg";
import CashierLogo from "../../../../public/applications/cashier.svg";
import ChatLogo from "../../../../public/applications/chat.svg";
import WorkshopLogo from "../../../../public/applications/workshop.svg";
import ConstructionLogo from "../../../../public/applications/constructions.svg";

function Applications() {
  const moreApplicationsData = [
    { name: "E-commerce", img: EcommerceLogo },
    { name: "Company Profile", img: CompanyProfileLogo },
    { name: "Cashier", img: CashierLogo },
    { name: "Chat", img: ChatLogo },
    { name: "Workshop", img: WorkshopLogo },
    { name: "Construction", img: ConstructionLogo },
    { name: "and many others" },
  ];

  return (
    <div>
      <h1 className="section-title">Applications that can be made</h1>
      <div className="container flex gap-8 flex-wrap lg:flex-nowrap mb-12">
        <div>
          <div className="flex items-center gap-6 mb-4">
            <Image src={OnlineAttendanceLogo} />
            <h3 className="font-semibold text-lg">Online Attendance</h3>
          </div>
          <div className="font-light">
            <p>
              With the times, your team may be able to work in the office or
              outside the office. Get the accuracy of your team's work hours
              with your own company's special online attendance feature with
              features such as:
            </p>
            <ul className="list-disc list-inside">
              <li>Clock in and Clock Out attendance</li>
              <li>Face Photo</li>
              <li>Face Recognition</li>
              <li>Accurate time stamp down to seconds</li>
              <li>GPS location of employees</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6 mb-4">
            <Image src={SportsCenterLogo} />
            <h3 className="font-semibold text-lg">Sports Center</h3>
          </div>
          <div className="font-light">
            <p>
              Create your sports center field booking application. Suitable for
              futsal, mini soccer, badminton, tennis, golf, basketball, to table
              tennis. Give your customers the freedom to:
            </p>
            <ul className="list-disc list-inside">
              <li>Choose a booking schedule</li>
              <li>Online Payments</li>
              <li>Automatic Scheduling System</li>
              <li>Search for Friends feature</li>
              <li>Split Payment with team members</li>
              <li>Informations and announcements from you</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6 mb-4">
            <Image src={BookingLogo} />
            <h3 className="font-semibold text-lg">Booking</h3>
          </div>
          <div className="font-light">
            <p>
              Offer your services in your own application to place orders to
              delivery directly to the client's house. Suitable for ac service,
              cleaning, cleaning service, CCTV, massage, and even other digital
              services. Features that can be made:
            </p>
            <ul className="list-disc list-inside">
              <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
              <li>
                Melakukan reservasi online dan pembayaran dengan metode
                pembayaran digital
              </li>
              <li>Penjadwalan dengan tim lapangan</li>
              <li>Aplikasi khusus untuk tim</li>
              <li>Split Payment with team members</li>
              <li>Promosi dan Kode voucher khusus</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex gap-4 flex-wrap justify-center mb-6">
        {moreApplicationsData.map((data) => (
          <div className="flex items-center">
            <Image src={data.img} className="mr-2" />{" "}
            <span className="text-lg font-semibold">{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
