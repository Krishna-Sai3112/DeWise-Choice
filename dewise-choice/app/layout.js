
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cardcollection from "./components/Cardcollection";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeWise Choice",
  description: "Buy the best device for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full bg-gradient-to-b from-black to-orange-900">
        <SessionWrapper>
          <Navbar />
          <div id="mainsite" className="w-full">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
