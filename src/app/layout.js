import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import "./slick.css";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Unstop: Connecting talent, colleges, & recruiters!",
  description:
    "Enabling the community of 25Mn+ students to learn, practice, & gain CV points by participating in hiring challenges, competitions, hackathons, & quizzes.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 w-full max-w-[1600px] mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
