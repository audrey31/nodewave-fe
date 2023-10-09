import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-roboto",
});

const rubik = localFont({
  src: [
    {
      path: "../../public/fonts/Rubik/static/Rubik-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-rubik",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nodewave Frontend Test",
  description: "Frontend Test Page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rubik.variable} ${roboto.variable} font-sans`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
