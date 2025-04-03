
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
import { ValuesProvider, useValues } from "./context/ValuesContext";
// import { BudgetContext, DesignContext, CameraContext, PerformanceContext, MediaContext, SoftwareContext } from "./context/ValuesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeWise Choice",
  description: "Buy the best device for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full bg-gradient-to-b from-black to-amber-900">
        <SessionWrapper>
          <ValuesProvider>
            <useValues>
            <Navbar />
            <div id="mainsite" className="w-full">
              {children}
            </div>
            <Footer />
            </useValues>
          </ValuesProvider>
        </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
