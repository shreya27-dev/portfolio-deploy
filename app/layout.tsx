// Global Layout
import type { Metadata } from "next";
import { Jaro, Jaldi} from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import FloatingFeedback from "./components/Feedback";

const jaro = Jaro({ subsets: ["latin"], weight: "400" });
const jaldi = Jaldi({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Shreya Golatkar | Designer & Developer",
  description: "Portfolio of Shreya Golatkar — UI/UX Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jaro.className} ${jaldi.className}`}>
        <Navbar/>
       {children}
       <FooterSection/>
       <FloatingFeedback/>
      </body>
    </html>
  );
}
